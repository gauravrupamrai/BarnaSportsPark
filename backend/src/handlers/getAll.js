const connectDatabase = require('../database/db');
const User = require('../models/user');

module.exports.handler = async (event, context) => {
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        await connectDatabase();

        let userObj = await User.find();
        return{
            statusCode: 200,
            body: JSON.stringify({msg: 'Users Found:', userObj})
        }

    } catch (error) {
        console.log(error);
        return{
            statusCode: error.statusCode || 500,
            body: JSON.stringify({error: error.message || 'Internal Server Error'})
        }
    }

};