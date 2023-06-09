const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  court: {
    type: String,
    enum: [
      "courtBarna1",
      "courtBarna2",
      "courtBarna3",
      "courtBarna4",
      "courtBarna5",
    ],
    required: true,
    index: true,
  },
  bookingSlot: {
    type: String,
    enum: [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ],
    required: true,
    index: true,
  },
  bookingDate: {
    type: Date,
    required: true,
    index: true,
  },
  membership: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Membership",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
