const mongoose = require("mongoose");
const validator = require("validator");

const ContactUsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: [true, "Please provide a full name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
    subject: {
        type: String,
        required: [true, "Please provide a subject"],
    },
    message: {
        type: String,
        required: [true, "Please provide a message"],
    },
});

module.exports = mongoose.model("ContactUs", ContactUsSchema);