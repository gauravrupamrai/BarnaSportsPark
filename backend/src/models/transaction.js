const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  membershipId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Membership'
  },
  stripeSessionId: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['succeeded', 'pending', 'failed'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
