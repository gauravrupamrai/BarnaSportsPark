const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false,
    },
    membership: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Membership'
      }
    ],
    phoneNumber:{
        type: Number,
      },
      addresses:[
        {
          country: {
            type: String,
          },
          city:{
            type: String,
          },
          address1:{
            type: String,
          },
          address2:{
            type: String,
          },
          zipCode:{
            type: Number,
          },
          addressType:{
            type: String,
          },
        }
      ],
      role:{
        type: String,
        default: "user",
      },
      emailPreferences: [{
        type: String,
        enum: ['Promotions', 'Events', 'Alerts']
    }],    
     createdAt:{
      type: Date,
      default: Date.now(),
     },
     updatedAt: {
        type: Date,
      },
     resetPasswordToken: String,
     resetPasswordTime: Date,
});


// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password.trim(), salt);
        this.updatedAt = new Date();
        next();
    } catch (error) {
        return next(error);
    }
});


// Compare user password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);