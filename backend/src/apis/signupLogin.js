const registerService = require("../services/register");
const loginService = require("../services/login");
const verifyService = require("../services/verify");
const activateService = require("../services/activate");
const util = require("../utils/util");

const healthPath = "/health";
const registerPath = "/register";
const loginPath = "/login";
const verifyPath = "/verify";
const activatePath = "/activate";

exports.handler = async (event, context) => {
  console.log("Request event: ", event);
  let response;

  context.callbackWaitsForEmptyEventLoop = false;

  switch (true) {
    case event.httpMethod === "GET" && event.path === healthPath:
      response = util.buildResponse(200);
      break;
    case event.httpMethod === "POST" && event.path === registerPath:
      const registerBody = JSON.parse(event.body);
      response = await registerService.register(registerBody);
      break;
    case event.httpMethod === "POST" && event.path === loginPath:
      const loginBody = JSON.parse(event.body);
      response = await loginService.login(loginBody);
      break;
    case event.httpMethod === "GET" && event.path === getuserPath:
      const getuserBody = JSON.parse(event.body);
      response = await loginService.getuser(getuserBody);
      break;
    case event.httpMethod === "POST" && event.path === verifyPath:
      const verifyBody = JSON.parse(event.body);
      response = await verifyService.verify(verifyBody);
      break;
    case event.httpMethod === "GET" && event.path === activatePath:
      response = await activateService.activate(event);
      break;
    default:
      response = util.buildResponse(404, "404 Not Found");
  }
  return response;
};
