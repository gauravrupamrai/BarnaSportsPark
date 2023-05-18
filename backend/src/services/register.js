const connectDatabase = require("../database/db");
const User = require("../models/user");
const util = require("../utils/util");
const { sendEmail } = require("./sendEmail");
const auth = require("../utils/auth");

const senderEmail = process.env.EMAIL_USERNAME;
const activationSecret = process.env.ACTIVATION_SECRET;
const activationURL = process.env.ACTIVATION_LINK;

async function register(registerBody) {
  try {
    await connectDatabase();
    const { name, email, password } = registerBody;
    if (!name || !email || !password) {
      return util.buildResponse(401, "Missing Fields");
    }

    // Check if user with given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return util.buildResponse(409, "User already exists");
    }

    const newUserObj = {
      name: name,
      email: email,
      password: password,
    };

    const activationToken = auth.generateToken(newUserObj, activationSecret, "1h");

    const userActivation = `${activationURL}?token=${activationToken}`;

    const mailOptions = {
      from: senderEmail, // Replace with the email address you want to use as the sender
      to: newUserObj.email,
      subject: "Account Activation",
      body: `Hello ${newUserObj.name}, Please click the following link to activate your account: ${userActivation}}</p>`,
    };

    await sendEmail(mailOptions);

    return util.buildResponse(201, `Please check your email ${newUserObj.email} to activate your account`, newUserObj);
    
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}

module.exports.register = register;
