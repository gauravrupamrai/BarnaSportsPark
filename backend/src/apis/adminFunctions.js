const notices = require("../services/adminServices/notices");
const email = require("../services/adminServices/email");


const util = require("../utils/util");

const createNotice = "/create-notice";
const getNotices = "/get-notices";
const getNoticeForHome = "/get-notice-for-home";
const sendEmailPath = "/sendCustomEmail";
const getEmailPath = "/getEmail";



exports.handler = async (event, context) => {
  console.log("Request event: ", event);
  let response;

  context.callbackWaitsForEmptyEventLoop = false;

  switch (true) {
    case event.httpMethod === "POST" && event.path === createNotice:
      const createNoticeBody = JSON.parse(event.body);
      response = await notices.createNotice(createNoticeBody);
      break;
    case event.httpMethod === "GET" && event.path === getNotices:
      response = await notices.getNotices();
      break;
    case event.httpMethod === "GET" && event.path === getNoticeForHome:
      response = await notices.getNoticeForHome();
      break;
    case event.httpMethod === "POST" && event.path === sendEmailPath:
      const sendEmailBody = JSON.parse(event.body);
      response = await email.sendCustomEmail(sendEmailBody);
      break;
    case event.httpMethod === "GET" && event.path === getEmailPath:
      response = await email.getEmail(event.queryStringParameters);
      break;
    default:
      response = util.buildResponse(404, "404 Not Found");
  }
  return response;
};
