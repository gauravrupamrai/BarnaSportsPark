const util = require("../../utils/util");
const connectDatabase = require("../../database/db");
const Membership = require("../../models/membership");
const User = require("../../models/user");
const auth = require("../../utils/auth");
const { v4: uuidv4 } = require("uuid");
const Transaction = require("../../models/transaction");
const { sendEmail } = require("../sendEmail");

const verifySecret = process.env.LOGIN_SECRET;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

function calculateExpiryDateBasedOnPurchaseDate(purchaseDate) {
  const expiryDate = new Date(purchaseDate);

  // If the purchase is made after May 15th, set the expiry to June 30th of the next year
  if (
    purchaseDate.getMonth() > 4 ||
    (purchaseDate.getMonth() === 4 && purchaseDate.getDate() > 15)
  ) {
    expiryDate.setFullYear(purchaseDate.getFullYear() + 1);
  }

  expiryDate.setMonth(5); // June (months are zero-based in JavaScript)
  expiryDate.setDate(30); // 30th

  return expiryDate;
}

const priceMap = {
  adult: process.env.STRIPE_PRICE_ADULT,
  child: process.env.STRIPE_PRICE_CHILD,
  family: process.env.STRIPE_PRICE_FAMILY,
};

const amountMap = {
  adult: "85",
  child: "40",
  family: "150",
};

async function newMembership(event) {
  try {
    await connectDatabase();
    const { token, newMemberData } = event;

    if (
      !token ||
      !newMemberData ||
      !newMemberData.membershipType ||
      !newMemberData.member1Name ||
      !newMemberData.member1DateOfBirth
    ) {
      return util.buildResponse(401, "Missing Fields", newMemberData);
    }

    const verified = auth.verifyToken(token, verifySecret);

    if (!verified.verified) {
      return util.buildResponse(401, "Invalid Token, Please login again");
    }

    const user = verified.decoded;

    const checkUser = await User.findById(user.userId).populate("membership");

    if (!checkUser) {
      return util.buildResponse(404, "User not found");
    }

    if (
      !checkUser.name ||
      !checkUser.email ||
      !checkUser.phoneNumber ||
      checkUser.addresses.length === 0
    ) {
      return util.buildResponse(401, "Please complete your profile first");
    }

    if (checkUser.membership.length > 0) {
      const existingMembership = checkUser.membership.find(
        (membership) =>
          membership.membershipType === newMemberData.membershipType
      );

      if (existingMembership) {
        return util.buildResponse(401, "Membership already exists");
      }
    }

    // For new memberships
    const startDate = new Date();

    const newMembershipData = {
      user: checkUser._id,
      membershipType: newMemberData.membershipType,
      member1Name: newMemberData.member1Name,
      member1DateOfBirth: newMemberData.member1DateOfBirth,
      membershipExpiry: calculateExpiryDateBasedOnPurchaseDate(startDate),
    };

    if (newMemberData.membershipType === "family") {
      // Populate additional family members
      for (let i = 2; i <= 6; i++) {
        const memberName = newMemberData[`member${i}Name`];
        const memberDateOfBirth = newMemberData[`member${i}DateOfBirth`];

        if (memberName && memberDateOfBirth) {
          newMembershipData[`member${i}Name`] = memberName;
          newMembershipData[`member${i}DateOfBirth`] = memberDateOfBirth;
        }
      }
    }

    const newMembership = new Membership(newMembershipData);

    const priceId = priceMap[newMemberData.membershipType];
    const amountValue = amountMap[newMemberData.membershipType];
    console.log(priceId);
    console.log(priceMap);
    console.log(newMemberData.membershipType);

    if (!priceId) {
      return util.buildResponse(400, "Invalid membership type");
    }

    const transactionId = uuidv4();
    console.log(transactionId);

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}&transaction_id=${transactionId}`,
      cancel_url: `${process.env.FRONTEND_URL}/membership/failed?session_id={CHECKOUT_SESSION_ID}&cancel=true&transaction_id=${transactionId}`,
      metadata: {
        newMembershipData: JSON.stringify(newMembershipData),
      },
    });

    const transaction = new Transaction({
      transactionId: transactionId,
      userId: checkUser._id,
      stripeSessionId: session.id,
      amount: amountValue,
      currency: "eur", // Replace this with the actual currency
      paymentStatus: "pending",
    });

    console.log(transaction);
    await transaction.save();

    return util.buildResponse(200, "Checkout session created", {
      checkoutSessionId: session.id,
      newMembership,
    });
  } catch (error) {
    console.log(error);
    return util.buildResponse(500, "Internal Server Error", error);
  }
}

async function stripeWebhook(event) {
  try {
    const sig = event.headers["Stripe-Signature"];
    const body = event.body;
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      sig,
      webhookSecret
    );


    if (stripeEvent.type === "checkout.session.completed") {
      const session = stripeEvent.data.object;
      const { newMembershipData, membershipId, newExpiryDate } =
        session.metadata;


      // Connect to the database
      await connectDatabase();


      if (membershipId) {
        const membership = await Membership.findById(membershipId);
        if (!membership) {
          return util.buildResponse(404, "Membership not found");
        }

        membership.membershipExpiry = new Date(newExpiryDate);
        await membership.save();

        const transaction = await Transaction.findOne({
          stripeSessionId: session.id,
        });
        if (transaction) {
          transaction.paymentStatus = "succeeded";
          transaction.membershipId = membershipId;
          await transaction.save();
        }

        return util.buildResponse(200, "Membership renewed");

      } else {
        const newMembership = new Membership(JSON.parse(newMembershipData));
        //logToFile(`newMembership: ${newMembership}`);

        const userID = JSON.parse(newMembershipData).user;
        //logToFile(`userID: ${userID}`);

        const checkUser = await User.findById(userID).populate("membership");

        //logToFile(`checkUser: ${checkUser}`);

        if (!checkUser) {
          return util.buildResponse(404, "User not found");
        }

        await newMembership.save();
        

        const transaction = await Transaction.findOne({
          stripeSessionId: session.id,
        });
        if (transaction) {
          transaction.paymentStatus = "succeeded";
          transaction.membershipId = newMembership._id;
          await transaction.save();
        }

        const mailOptions = {
          to_addresses: checkUser.email,
          subject: "Account Activation",
          body: `<h2><strong>Hello ${checkUser.name},</strong><br />
        <br />
        Welcome to <span style="color:#0000FF">Barna </span><span style="color:#DAA520">Sports </span><span style="color:#B22222">Park </span>Community.</h2>
        Your membership has been registered successfully. Below are the respective membership details:<br />
        Membership ID: ${newMembership._id}<br />
        Membership Type: ${newMembership.membershipType}<br />
        Transaction ID: ${transaction.transactionId}<br />
        <br />
        We are in the process of assigning a FOB to your membership ID so that you can access courts.<br />
        <br />
        We will send you an email in 7 working days with all the details related to FOB and accessing court.<br />
        <br />
        Thank You and Regards,<br />
        Barna Sports Park`,
        };

        await sendEmail(mailOptions);

        // Add membership to the user and save the user
        checkUser.membership.push(newMembership._id);
        await checkUser.save();

        return util.buildResponse(200, "Membership saved");
      }

      // Create the new membership
    } else if (stripeEvent.type === "payment_intent.succeeded") {
      const paymentIntent = stripeEvent.data.object;

      const transaction = await Transaction.findOne({
        stripeSessionId: paymentIntent.id,
      });
      if (transaction) {
        transaction.paymentStatus = "succeeded";
        await transaction.save();
      }

      return util.buildResponse(200, "Payment succeeded");
    } else if (stripeEvent.type === "payment_intent.payment_failed") {
      const paymentIntent = stripeEvent.data.object;

      const transaction = await Transaction.findOne({
        stripeSessionId: paymentIntent.id,
      });
      if (transaction) {
        transaction.paymentStatus = "failed";
        await transaction.save();
      }

      return util.buildResponse(400, "Payment failed");
    } else {
      return util.buildResponse(400, "Invalid event type");
    }
  } catch (error) {
    //logToFile(`Error handling Stripe webhook: ${error}`);
    return util.buildResponse(500, "Internal Server Error", error);
  }
}

async function getMembership(event) {
  try {
    await connectDatabase();
    const { token, membershipId } = event;

    if (!token || !membershipId) {
      return util.buildResponse(401, "Missing Fields", event);
    }

    const verified = auth.verifyToken(token, verifySecret);

    if (!verified.verified) {
      return util.buildResponse(401, "Invalid Token, Please login again");
    }

    const membership = await Membership.findById(membershipId);

    if (!membership) {
      return util.buildResponse(404, "Membership not found");
    }

    return util.buildResponse(200, "Membership found", membership);
  } catch (error) {
    console.log(error);
    return util.buildResponse(500, "Internal Server Error", error);
  }
}

async function membershipRenewal(event) {
  try {
    await connectDatabase();
    const { token, membershipId } = event;

    if (!token || !membershipId) {
      return util.buildResponse(401, "Missing Fields", event);
    }

    const verified = auth.verifyToken(token, verifySecret);

    if (!verified.verified) {
      return util.buildResponse(401, "Invalid Token, Please login again");
    }

    const user = verified.decoded;
    
    const membership = await Membership.findById(membershipId);

    if (!membership) {
      return util.buildResponse(404, "Membership not found");
    }

    const purchaseDate = new Date();
    const newExpiryDate = calculateExpiryDateBasedOnPurchaseDate(purchaseDate);

    const priceId = priceMap[membership.membershipType];
    const amountValue = amountMap[membership.membershipType];

    if (!priceId) {
      return util.buildResponse(400, "Invalid membership type");
    }

    const transactionId = uuidv4();

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}&transaction_id=${transactionId}`,
      cancel_url: `${process.env.FRONTEND_URL}/membership/failed?session_id={CHECKOUT_SESSION_ID}&cancel=true&transaction_id=${transactionId}`,
      metadata: {
        membershipId: membershipId,
        newExpiryDate: newExpiryDate.toISOString(), // convert date to string
      },
    });

    const transaction = new Transaction({
      transactionId: transactionId,
      userId: user.userId,
      stripeSessionId: session.id,
      amount: amountValue,
      currency: "eur", // Replace this with the actual currency
      paymentStatus: "pending",
    });

    await transaction.save();

    return util.buildResponse(200, "Checkout session created", {
      checkoutSessionId: session.id,
    });
  } catch (error) {
    console.log(error);
    return util.buildResponse(500, "Internal Server Error", error);
  }
}

module.exports.newMembership = newMembership;
module.exports.stripeWebhook = stripeWebhook;
module.exports.getMembership = getMembership;
module.exports.membershipRenewal = membershipRenewal;
