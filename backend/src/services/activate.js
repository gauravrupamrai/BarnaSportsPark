const User = require("../models/user");
const connectDatabase = require("../database/db");
const util = require("../utils/util");
const auth = require("../utils/auth");

const activationSecret = process.env.ACTIVATION_SECRET;
const frontendURL = process.env.FRONTEND_URL;

async function activate(event) {
  try {
    const token = event.queryStringParameters.token;
    const decodedToken = auth.verifyToken(token, activationSecret);

    if (!decodedToken.verified) {
      const response = util.buildResponse(302, "Invalid Token");
      response.headers = {
        Location: `${frontendURL}/activate?status=invalid_token`,
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      };

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
      const response = util.buildResponse(302, "User already exists");
      response.headers = {
        Location: `${frontendURL}/activate?status=user_already_exists`,
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      };

      return response;
    }

    const newUser = await User.create(userObj);

    if(!newUser){
      const response = util.buildResponse(500, "Internal Server Error");
      response.headers = {
        Location: `${frontendURL}/activate?status=internal_server_error`,
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      };

      return response;
    }

    let newUserObj = newUser.toObject();
    delete newUserObj._id;
    delete newUserObj.__v;

    const cookie = auth.createCookie(newUserObj, activationSecret);

    const response = util.buildResponse(302, "User created");
    response.headers = {
      Location: `${frontendURL}/activate?status=success`,
      "Set-Cookie": cookie,
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      // ...response.headers,
    };

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
