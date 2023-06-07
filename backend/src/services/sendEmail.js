const util = require("../utils/util");
const AWS = require("aws-sdk");

const SES = new AWS.SES();
const senderEmail = process.env.EMAIL_USERNAME;

async function sendEmail(sendEmailBody) {

  const {to_addresses, subject, body} = sendEmailBody;

  console.log("sendEmailBody: ", sendEmailBody);

  if (!to_addresses || !subject || !body) {
    return util.buildResponse(400, "Missing parameters");
  }

  const params = {
    Destination: {
      ToAddresses: to_addresses.split(','),
    },
    Message: {
      Body: {
        Html:{
          Charset: "UTF-8",
          Data: body
        }
      },
      Subject: { Data: subject },
    },
    Source: senderEmail,
  };

  console.log(params);

  try {
    await SES.sendEmail(params).promise();
    return util.buildResponse(200, "Email sent");
  } catch (error) {
    console.log("Error sending email: ", error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message, error);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}

module.exports.sendEmail = sendEmail;
