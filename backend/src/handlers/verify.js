const util = require('../utils/util.js');
const auth = require('../utils/auth.js');

function verify(requestBody){
    if(!requestBody.user || !requestBody.user.name || !requestBody.user.email || !requestBody.token){
        return util.buildResponse(400, 'Incorrect Request Body', {verified: false});
    }

    const user = requestBody.user;
    const token = requestBody.token;
    const verificationToken = auth.verifyToken(user.name, token);
    if(!verificationToken.verified){
        return util.buildResponse(401, verification);
    }

    return util.buildResponse(200, 'Successfully Verified', {
        verified: true,
        user: user,
        token: token
    });
}

module.exports.verify = verify;