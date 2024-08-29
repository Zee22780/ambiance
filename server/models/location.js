const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  amenities: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location