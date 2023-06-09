const notices = require("../services/adminServices/notices");
const email = require("../services/adminServices/email");
const fob = require("../services/adminServices/updateFOB");
const util = require("../utils/util");

const createNotice = "/create-notice";
const getNotices = "/get-notices";
const getNoticeForHome = "/get-notice-for-home";
const sendEmailPath = "/sendCustomEmail";
const getEmailPath = "/getEmail";
const unassignedFOBPath = "/get-unassigned-fob";
const assignFOBPath = "/assign-fob";



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
    case event.httpMethod === "GET" && event.path === unassignedFOBPath:
      response = await fob.getUnassignedFOB();
      break;
    case event.httpMethod === "POST" && event.path === assignFOBPath:
      const assignFOBBody = JSON.parse(event.body);
      response = await fob.assignFOB(assignFOBBody);
      break;
    default:
      response = util.buildResponse(404, "404 Not Found");
  }
  return response;
};
