const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const util = require("../../utils/util");
const { sendEmail } = require("../sendEmail");
const auth = require("../../utils/auth");

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

    const activationToken = auth.generateToken(
      newUserObj,
      activationSecret,
      "1h"
    );

    const userActivation = `${activationURL}?token=${activationToken}`;

    const mailOptions = {
      to_addresses: newUserObj.email,
      subject: "Account Activation",
      body: `<b>Hello ${newUserObj.name},</b> <br/>Please click the following link to activate your account:<br/> ${userActivation}`,
    };

    await sendEmail(mailOptions);

    return util.buildResponse(
      201,
      `Please check your email ${newUserObj.email} to activate your account`,
      newUserObj
    );
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
