const util = require("../../utils/util");
const { sendEmail } = require("../sendEmail");
const { connectDatabase } = require("../../database/db");

async function sendCustomEmail(requestBody) {
    try {
        const { to_addresses, subject, body } = requestBody;
        if (!to_addresses || !subject || !body) {
        return util.buildResponse(400, "Missing parameters");
        }
    
        const mailOptions = {
        to_addresses: to_addresses,
        subject: subject,
        body: body,
        };

        console.log(mailOptions);
    
        const response = await sendEmail(mailOptions);
    
        return util.buildResponse(200, "Email sent", response);
    } catch (error) {
        console.log(error);
        if (error.statusCode) {
        return util.buildResponse(error.statusCode, error.message, error);
        } else {
        return util.buildResponse(500, "Internal Server Error");
        }
    }
}

async function getEmail(requestBody) {
    try {
        await connectDatabase();

        const { preferences } = requestBody;

        if (!preferences) {
            return util.buildResponse(400, "Missing parameters");
        }

        // Fetch users with matching preferences and project only the email field
        const users = await User.find({ emailPreferences: preferences }, 'email');

        // Extract emails into an array
        const emails = users.map(user => user.email);

        // Do something with the emails...
        // return emails, or manipulate data as needed
        return util.buildResponse(200, emails);

    } catch (error) {
        console.error(error);
        return util.buildResponse(500, "An error occurred");
    }
}


module.exports.getEmail = getEmail;
module.exports.sendCustomEmail = sendCustomEmail;