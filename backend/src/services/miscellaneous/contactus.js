const connectDatabase = require('../../database/db');
const util = require('../../utils/util');
const ContactUs = require('../../models/contactUs');


async function submitContactUsInfo(body) {
    try {
        await connectDatabase();

        const { fullName, subject, email, phone, message } = body;

        if (!fullName || !subject || !email || !phone) {
            return util.buildResponse(401, 'Missing Fields');
        }

        const contactUsInfo = {
            fullName,
            subject,
            email,
            phone,
            message
        }

        await ContactUs.create(contactUsInfo);

        return util.buildResponse(200, 'Volunteer info submitted', contactUsInfo);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};

async function getContactUsInfo() {
    try {
        await connectDatabase();

        const contactUsInfo = await ContactUs.find({});

        return util.buildResponse(200, 'Contact Us info retrieved', contactUsInfo);
    } catch (error) {
        console.log(error);
        return util.buildResponse(500, 'Internal Server Error');
    }
};

module.exports.submitContactUsInfo = submitContactUsInfo;
module.exports.getContactUsInfo = getContactUsInfo;