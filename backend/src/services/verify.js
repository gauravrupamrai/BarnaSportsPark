const util = require('../utils/util.js');
const auth = require('../utils/auth.js');

const verifySecret = process.env.LOGIN_SECRET;

function verify(requestBody){

    const { user, token } = requestBody ?? {};


    if (!user?.name || !user?.email || !token){
        return util.buildResponse(400, 'Incorrect Request Body', {verified: false});
    }

    const decodedToken = auth.verifyToken(token, verifySecret);
    if(decodedToken.verified){
        if(decodedToken.decoded.email !== user.email){
            return util.buildResponse(401, 'Invalid User', {verified: decodedToken});
        } else {
            return util.buildResponse(200, 'Successfully Verified', {
                verified: decodedToken,
                user: user,
                token: token
            });
        }
    }else{
        return util.buildResponse(401, 'Invalid Token', {verified: decodedToken});
    }
}

module.exports.verify = verify;