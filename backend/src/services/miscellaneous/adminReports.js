
const util = require('../../utils/util');
const connectDatabase = require('../../database/db');
const User = require('../../models/user');
const Member = require('../../models/membership');
const Transaction = require('../../models/transaction');
const Booking = require('../../models/bookingCourt');

async function getAllUsers(){
    try{
        await connectDatabase();
        const users = await User.find({});
        return util.buildResponse(200, 'Users retrieved', users);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};
async function getAllMembers(){
    try{
        await connectDatabase();
        const members = await Member.find({});
        return util.buildResponse(200, 'Members retrieved', members);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};
async function getAllTransactions(){
    try{
        await connectDatabase();
        const transactions = await Transaction.find({});
        return util.buildResponse(200, 'Transactions retrieved', transactions);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};
async function getAllBookings(){
    try{
        await connectDatabase();
        const bookings = await Booking.find({});
        return util.buildResponse(200, 'Bookings retrieved', bookings);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};

module.exports.getAllUsers = getAllUsers;
module.exports.getAllMembers = getAllMembers;
module.exports.getAllTransactions = getAllTransactions;
module.exports.getAllBookings = getAllBookings;