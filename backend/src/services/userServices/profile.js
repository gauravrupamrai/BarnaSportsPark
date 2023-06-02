const util = require("../../utils/util");
const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const auth = require("../../utils/auth");

const verifySecret = process.env.LOGIN_SECRET;

async function updateProfile(event) {
  try {
    await connectDatabase();
    const { token, userUpdate } = event;
    console.log("Values Passed:");
    console.log(event);
    console.log(userUpdate);
    console.log(token);
    console.log(userUpdate.phoneNumber);
    console.log(userUpdate.addresses);

    if (!token || !userUpdate) {
      return util.buildResponse(401, "Missing Fields");
    }

    const verified = auth.verifyToken(token, verifySecret);
    console.log(verified);

    if (!verified.verified) {
      return util.buildResponse(401, "Invalid Token, Please login again");
    }

    const user = verified.decoded;
    console.log("Decoded Values:");
    console.log(user);
    console.log(user.userId);
    console.log(verified.decoded);

    const updateUser = await User.findById(user.userId);
    console.log("Before Update:");
    console.log(updateUser);
    console.log(updateUser.name);
    console.log(updateUser.email);
    console.log(updateUser.phoneNumber);
    console.log(updateUser.addresses);
    console.log(updateUser.membership);
    console.log(updateUser._id);

    if (userUpdate.email) {
      return util.buildResponse(401, "Email cannot be updated");
    }

    if (userUpdate.phoneNumber) {
        updateUser.phoneNumber = userUpdate.phoneNumber;
        console.log(updateUser.phoneNumber);
        console.log(userUpdate.phoneNumber);
    }

    if (userUpdate.addresses) {
        updateUser.addresses = userUpdate.addresses;
        console.log(updateUser.addresses);
        console.log(userUpdate.addresses);
    }

    console.log("After Update:");
    console.log(updateUser);
    console.log(updateUser.name);
    console.log(updateUser.email);
    console.log(updateUser.phoneNumber);
    console.log(updateUser.addresses);
    console.log(updateUser.membership);
    console.log(updateUser._id);

    await updateUser.save();

    const response = util.buildResponse(200, "Profile updated", updateUser);
    return response;
  } catch (error) {
    return util.buildResponse(500, "Internal Server Error", error);
  }
}
 
function test(event) {
  try {
    const response = util.buildResponse(200, "Test API", event);
    return response;
  } catch (error) {
    return util.buildResponse(500, "Internal Server Error", error);
  }
  
}

module.exports.test = test;

module.exports.updateProfile = updateProfile;
