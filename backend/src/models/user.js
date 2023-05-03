const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add some text'],
    },
    email: {
        type: String,
        required: [true, 'Please add some text'],
        unique: true,
        validate: [validator.isEmail, 'Entered email is invalid'],
    },
    password: {
        type: String,
        required: [true, 'Please add some text'],
        minlength: 6,
        select: false,
    },
});

UserSchema.pre('save', async function (next) {
    this.password = bcrypt.hashSync(this.password.trim(), 10);
    next();
});

module.exports = mongoose.model('User', UserSchema);