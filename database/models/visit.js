const mongoose = require('mongoose');

const visitSchema = mongoose.Schema({
  restaurant_id: String,
  comments: String,
  review_value: Number
})

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit;