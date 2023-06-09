const connectDatabase = require('../../database/db');
const User = require('../../models/user');
const Membership = require('../../models/membership');

const util = require('../../utils/util');
const auth = require('../../utils/auth');

const loginSecret = process.env.LOGIN_SECRET;

async function login(loginBody) {
    try {
        await connectDatabase();
        const { email, password } = loginBody;
        
        if(!email || !password){
            return util.buildResponse(401, 'Missing Fields');
        }

        const userEmail = await User.findOne({email}).populate('membership').select('+password');
        if(!userEmail){
            return util.buildResponse(404, 'User not found');
        }

        const isMatch = await userEmail.comparePassword(password);

        if(!isMatch){
            return util.buildResponse(401, 'Invalid Credentials');
        }

        const userInfo = {
            userId: userEmail._id,
            name: userEmail.name,
            email: userEmail.email,
            role: userEmail.role,
        }

        if (userEmail.membership.length > 0) {
            userInfo.hasMembership = true;
            userInfo.memberships = userEmail.membership.map(membership => ({
                membershipType: membership.membershipType,
                membershipId: membership._id
            }));
        } else {
            userInfo.hasMembership = false;
        }
        

        const token = auth.generateToken(userInfo, loginSecret, "1h");

        const response = {
            user: userInfo,
            token: token
        }

        return util.buildResponse(200, 'User logged in', response);;
        
    } catch (error) {
        console.log(error);
        if(error.statusCode){
            return util.buildResponse(error.statusCode, error.message);
        } else {
            return util.buildResponse(500, 'Internal Server Error');
        }
    }
}

module.exports.login = login;
