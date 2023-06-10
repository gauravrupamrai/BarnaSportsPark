const connectDatabase = require('../../database/db');
const util = require('../../utils/util');
const Volunteer = require('../../models/volunteer');


async function submitVolunteerInfo(body) {
    try {
        await connectDatabase();

        const { firstName, lastName, email, phone, message } = body;

        if (!firstName || !lastName || !email || !phone) {
            return util.buildResponse(401, 'Missing Fields');
        }

        const volunteerInfo = {
            firstName,
            lastName,
            email,
            phone,
            message
        }

        await Volunteer.create(volunteerInfo);

        return util.buildResponse(200, 'Volunteer info submitted', volunteerInfo);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};

async function getVolunteerInfo() {
    try {
        await connectDatabase();

        const volunteerInfo = await Volunteer.find({});

        return util.buildResponse(200, 'Volunteer info retrieved', volunteerInfo);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};

module.exports.submitVolunteerInfo = submitVolunteerInfo;
module.exports.getVolunteerInfo = getVolunteerInfo;