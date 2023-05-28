const notices = require("../services/adminServices/notices");
// const loginService = require("../services/login");
// const verifyService = require("../services/verify");
// const activateService = require("../services/activate");

const util = require("../utils/util");

const createNotice = "/create-notice";
const getNotices = "/get-notices";
const getNoticeForHome = "/get-notice-for-home";
// const loginPath = "/login";
// const verifyPath = "/verify";
// const activatePath = "/activate";

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
    // case event.httpMethod === "POST" && event.path === loginPath:
    //   const loginBody = JSON.parse(event.body);
    //   response = await loginService.login(loginBody);
    //   break;
    // case event.httpMethod === "POST" && event.path === verifyPath:
    //   const verifyBody = JSON.parse(event.body);
    //   response = await verifyService.verify(verifyBody);
    //   break;
    // case event.httpMethod === "GET" && event.path === activatePath:
    //   response = await activateService.activate(event);
    //   break;
    default:
      response = util.buildResponse(404, "404 Not Found");
  }
  return response;
};
