const mongoose = require('mongoose');
const validator = require('validator');

const VolunteerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please provide a first name'],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please provide a last name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    },
    message: {
        type: String,
    },  
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);