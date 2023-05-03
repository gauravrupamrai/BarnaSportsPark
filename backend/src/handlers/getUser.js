const connectDatabase = require('../database/db');
const User = require('../models/user');

module.exports.handler = async (event, context) => {
    
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        await connectDatabase();
        const {email} = event.pathParameters;
        const userObj = await User.findOne({email});

        if(userObj){
            return{
                statusCode: 200,
                body: JSON.stringify({msg: 'User Found:', userObj})
            };
        }else{
            return{
                statusCode: 404,
                body: JSON.stringify({msg: 'User not found'})
            };
        }

    } catch (error) {
        console.log(error);
        return{
            statusCode: error.statusCode || 500,
            body: JSON.stringify({error: error.message || 'Internal Server Error'})
        };
    }

};