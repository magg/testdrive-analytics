var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  product: { type: 'ObjectId', ref: 'Product' },
  quantity: Number,
  saleDate: Date,
  color: String
});

