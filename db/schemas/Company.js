var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  name: String,
  location: {
    city: String,
    country: String
  },
  sector: String,
  founded: Date
});
