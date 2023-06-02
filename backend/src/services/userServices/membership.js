const util = require("../../utils/util");
const connectDatabase = require("../../database/db");
const Membership = require("../../models/membership");
const User = require("../../models/user");
const auth = require("../../utils/auth");

const verifySecret = process.env.LOGIN_SECRET;

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
      return util.buildResponse(401, "Missing Fields");
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

    const newMembership = new Membership({
      user: checkUser._id,
      membershipType: newMemberData.membershipType,
      member1Name: newMemberData.member1Name,
      member1DateOfBirth: newMemberData.member1DateOfBirth,
    });

    await newMembership.save();

    checkUser.membership.push(newMembership._id);
    await checkUser.save();

    return util.buildResponse(200, "Membership created", newMembership);
  } catch (error) {
    return util.buildResponse(500, "Internal Server Error", error);
  }
}
module.exports.newMembership = newMembership;
