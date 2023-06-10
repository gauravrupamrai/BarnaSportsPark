const sendEmailService = require("../services/sendEmail");
const sendEmailPath = "send-Email";
const volunteerService = require("../services/miscellaneous/volunteer");
const contactusService = require("../services/miscellaneous/contactus");

const util = require("../utils/util");

const healthPath = "/health";
const submitVolunteerInfoPath = "/submit-volunteer-info";
const submitContactUsInfoPath = "/submit-contact-us-info";
const getVolunteerInfoPath = "/get-volunteer-info";
const getContactUsInfoPath = "/get-contact-us-info";

exports.handler = async (event, context) => {
  console.log("Request event: ", event);
  let response;

  context.callbackWaitsForEmptyEventLoop = false;

  switch (true) {
    case event.httpMethod === "GET" && event.path === healthPath:
      response = util.buildResponse(200);
      break;
    case event.httpMethod === "POST" && event.path === sendEmailPath:
      const sendEmailBody = JSON.parse(event.body);
      response = await sendEmailService.sendEmail(sendEmailBody);
      break;
    case event.httpMethod === "POST" && event.path === submitVolunteerInfoPath:
      const submitVolunteerInfoBody = JSON.parse(event.body);
      response = await volunteerService.submitVolunteerInfo(
        submitVolunteerInfoBody
      );
      break;
    case event.httpMethod === "POST" && event.path === submitContactUsInfoPath:
      const submitContactUsInfoBody = JSON.parse(event.body);
      response = await contactusService.submitContactUsInfo(
        submitContactUsInfoBody
      );
      break;
    case event.httpMethod === "GET" && event.path === getVolunteerInfoPath:
      response = await volunteerService.getVolunteerInfo();
      break;
    case event.httpMethod === "GET" && event.path === getContactUsInfoPath:
      response = await contactusService.getContactUsInfo();
      break;

    default:
      response = util.buildResponse(404, "404 Not Found");
  }
  return response;
};
