const mongoose = require("mongoose");

const Notices = new mongoose.Schema({
  contentType: {
    type: String,
    trim: true,
    required: [true, "Please provide Content Type"],
  },
  contentTitle: {
    type: String,
    required: [true, "Please provide Content Title"],
  },
  content: {
    type: String,
    required: [true, "Please provide Content Title"],
  },
  displayOnHome:{
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("notice", Notices);
