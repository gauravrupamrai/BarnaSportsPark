const connectDatabase = require('../database/db');
const User = require('../models/user');

const util = require('../utils/util');

async function register(registerBody) {

    try {
        await connectDatabase();
        const { name, email, password } = registerBody;
        if(!name || !email || !password){
            return util.buildResponse(401, 'Missing Fields');
        }

        // Check if user with given email already exists
        const existingUser = User.findOne({email});
        if(existingUser){
            return util.buildResponse(409, 'User already exists');
        }

        const newUserObj = {
            name : name,
            email : email,
            password : password
        };

        const newUserSave = await User.create(newUserObj);
        if(!newUserSave){
            return util.buildResponse(501, 'Service Unavailable');
        }

        return util.buildResponse(201, 'User registered', newUserSave);
        
    } catch (error) {
        console.log(error);
        if(error.statusCode){
            return util.buildResponse(error.statusCode, error.message);
        } else {
            return util.buildResponse(500, 'Internal Server Error');
        }
    }
}

module.exports.register = register;