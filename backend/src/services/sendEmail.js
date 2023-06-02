const util = require("../utils/util");
const AWS = require("aws-sdk");

const SES = new AWS.SES();

async function sendEmail(sendEmailBody) {

  const {to, from, subject, body} = sendEmailBody;

  if (!to || !from || !subject || !body) {
    return util.buildResponse(400, "Missing parameters");
  }

  const params = {
    Destination: {
      ToAddresses: [to],
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
    Source: from,
  };

  try {
    await SES.sendEmail(params).promise();
    return util.buildResponse(200, "Email sent");
  } catch (error) {
    console.log("Error sending email: ", error);
    if (error.statusCode) {
      return util.buildResponse(error.statusCode, error.message);
    } else {
      return util.buildResponse(500, "Internal Server Error");
    }
  }
}

module.exports.sendEmail = sendEmail;
