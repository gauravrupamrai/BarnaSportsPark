const jwt = require('jsonwebtoken');

function generateToken(user) {

    if(!user){
        return null;
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '1h'});
    return token;
}

function verifyToken(userName, token){
    return jwt.verify(token, process.env.JWT_SECRET, (err, response) => {
        if(err){
            return {
                verified: false,
                message: 'Invalid Token'
            };
        }

        if(response.name !== userName){
            return {
                verified: false,
                message: 'Invalid User'
            }
        }

        return {
            verified: true,
            message: 'Valid Token, Verified'
        };
    });
}

module.exports.generateToken = generateToken;
module.exports.verifyToken = verifyToken;