const User = require("../../models/user");
const connectDatabase = require("../../database/db");
const util = require("../../utils/util");
const auth = require("../../utils/auth");

const activationSecret = process.env.ACTIVATION_SECRET;
const frontendURL = process.env.FRONTEND_URL;

async function activate(event) {
  try {
    const token = event.queryStringParameters.token;
    const decodedToken = auth.verifyToken(token, activationSecret);

    if (!decodedToken.verified) {
      const response = util.buildResponseWithCookie(302, "Invalid Token", null, null, `${frontendURL}/activate?status=invalid_token`);
      return response;
    };

    const userObj = {
      name: decodedToken.decoded.name,
      email: decodedToken.decoded.email,
      password: decodedToken.decoded.password,
    };

    await connectDatabase();

    const user = await User.findOne({email : userObj.email});
    if (user) {
      const response = util.buildResponseWithCookie(302, "User already exists", null, null, `${frontendURL}/activate?status=user_already_exists`);
      return response;
    }

    const newUser = await User.create(userObj);

    if(!newUser){
      const response = util.buildResponseWithCookie(500, "Internal Server Error", null, null, `${frontendURL}/activate?status=internal_server_error`);
      return response;
    }

    let newUserObj = newUser.toObject();
    delete newUserObj._id;
    delete newUserObj.__v;

    const cookie = auth.createCookie(newUserObj, activationSecret);

    const response = util.buildResponseWithCookie(302, "User created", null, cookie, `${frontendURL}/activate?status=success`);
    return response;

  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}

module.exports.activate = activate;
