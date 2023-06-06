const membershipService = require("../services/userServices/membership");
const profileService = require("../services/userServices/profile");

const newMembershipPath = "/user-new-membership";
const membershipWebhookPath = "/user-membership-webhook";
const profileUpdatePath = "/user-profile-update";
const profileInfoPath = "/user-profile-info";

exports.handler = async (event, context) => {
  console.log("Request event: ", event);
  let response;

  context.callbackWaitsForEmptyEventLoop = false;

  switch (true) {
    case event.httpMethod === "POST" && event.path === newMembershipPath:
      const newMembershipBody = JSON.parse(event.body);
      response = await membershipService.newMembership(newMembershipBody);
      break;
    case event.httpMethod === "POST" && event.path === membershipWebhookPath:
      response = await membershipService.stripeWebhook(event);
      break;
    case event.httpMethod === "POST" && event.path === profileUpdatePath:
      const profileUpdateBody = JSON.parse(event.body);
      response = await profileService.updateProfile(profileUpdateBody);
      break;
    case event.httpMethod === "GET" && event.path === profileInfoPath:
        response = await profileService.getProfile(event.queryStringParameters);
        break;
    default:
      response = util.buildResponse(404, "404 Not Found");
  }
  return response;
};
