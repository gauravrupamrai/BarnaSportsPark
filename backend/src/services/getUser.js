const connectDatabase = require("../database/db");
const User = require("../models/user");
const util = require("../utils/util");

async function getUser(request) {
  try {
    await connectDatabase();

    const user = await User.findOne({ email: request.email });

    if (!user) {
      return util.buildResponse(404, "User Not Found");
    }

    return util.buildResponse(200, "User Found", user);
  } catch (error) {
    return util.buildResponse(500, "Internal Server Error", error);
  }
}

module.exports.getUser = getUser;
