const membershipService = require("../services/userServices/membership");
const profileService = require("../services/userServices/profile");

const newMembershipPath = "/user-new-membership";
const profileUpdatePath = "/user-profile-update";
const testPath = "/test-api";

exports.handler = async (event, context) => {
    console.log("Request event: ", event);
    let response;
  
    context.callbackWaitsForEmptyEventLoop = false;

    switch (true) {
        case event.httpMethod === "POST" && event.path === newMembershipPath:
            const newMembershipBody = JSON.parse(event.body);
            response = await membershipService.newMembership(newMembershipBody);
            break;
        case event.httpMethod === "POST" && event.path === profileUpdatePath:
        const profileUpdateBody = JSON.parse(event.body);
        response = await profileService.updateProfile(profileUpdateBody);
            break;
        case event.httpMethod === "POST" && event.path === testPath:
        const testBody = JSON.parse(event.body);
        response = await profileService.test(testBody);
            break;
    }
    return response;
};