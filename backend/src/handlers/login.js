const connectDatabase = require('../database/db');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const util = require('../utils/util');
const auth = require('../utils/auth');

async function login(loginBody) {

    try {
        await connectDatabase();
        const { email, password } = loginBody;
        if(!email || !password){
            return util.buildResponse(401, 'Missing Fields');
        }

        const userEmail = await User.findOne({email});
        if(!userEmail){
            return util.buildResponse(404, 'User not found');
        }

        if(!bcrypt.compareSync(password, userEmail.password)){
            return util.buildResponse(401, 'Invalid password');
        }

        const userInfo = {
            name: userEmail.name,
            email: userEmail.email
        }

        const token = auth.generateToken(userInfo);

        const response = {
            user: userInfo,
            token: token
        }

        return util.buildResponse(200, 'User logged in', response);

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