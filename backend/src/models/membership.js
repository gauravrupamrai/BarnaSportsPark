const mongoose = require('mongoose');

const MembershipSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    membershipType: {
        type: String,
        required: true,
        enum: ['child', 'family', 'adult'] // as per your requirement, membership type can be one of these 3 types.
    },
    member1Name:{
        type: String,
        required: true,
    },
    member1DateOfBirth:{
        type: Date,
        required: true,
    },
    member2Name:{
        type: String,
    },
    member2DateOfBirth:{
        type: Date,
    },
    member3Name:{
        type: String,
    },
    member3DateOfBirth:{
        type: Date,
    },
    member4Name:{
        type: String,
    },
    member4DateOfBirth:{
        type: Date,
    },
    member5Name:{
        type: String,
    },
    member5DateOfBirth:{
        type: Date,
    },
    member6Name:{
        type: String,
    },
    member6DateOfBirth:{
        type: Date,
    },
});

module.exports = mongoose.model('Membership', MembershipSchema);