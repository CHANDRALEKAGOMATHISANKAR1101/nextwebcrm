const mongoose = require('mongoose');
 
const paymentSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice',
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'PayPal', 'Bank Transfer'],
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model('Payment', paymentSchema);