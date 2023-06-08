const auth = require("../../utils/auth");
const util = require("../../utils/util");
const connectDatabase = require("../../database/db");
const User = require("../../models/user");
const { sendEmail } = require("../sendEmail");

const resetPasswordTokenSecret = process.env.RESET_PASSWORD_TOKEN_SECRET;

async function requestResetPassword(body) {
  try {
    await connectDatabase();

    const { email } = body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return util.buildResponse(404, "User not found");
    }

    // Generate a password reset token
    const resetToken = auth.generateToken(
      { _id: user._id },
      resetPasswordTokenSecret,
      "1h"
    );

    // Save the token to the user model (you need to add a passwordResetToken field to the model)
    user.passwordResetToken = resetToken;
    await user.save();

    // Send the token to the user's email
    const mailOptions = {
      to_addresses: user.email,
      subject: "Password Reset Request",
      body: `<b>Hello ${user.name},</b> <br/>Please click the following link to reset your password:<br/> ${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`,
    };
    await sendEmail(mailOptions);

    return util.buildResponse(
      200,
      "Password reset link has been sent to your email"
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

async function resetPassword(body) {
  try {
    const { token, newPassword } = body;
    await connectDatabase();

    // Find user by password reset token
    const decoded = auth.verifyToken(token, resetPasswordTokenSecret);
    console.log(decoded);
    const user = await User.findById(decoded.decoded._id).select("+passwordResetToken");
    if (!user) {
      return util.buildResponse(404, "Invalid token", decoded);
    }

    // Update the password
    user.password = newPassword;
    user.passwordResetToken = undefined; // Clear the password reset token
    await user.save();

    return util.buildResponse(200, "Password has been reset successfully");
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}

module.exports.requestResetPassword = requestResetPassword;
module.exports.resetPassword = resetPassword;
