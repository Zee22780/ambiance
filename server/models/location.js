import mongoose from 'mongoose'
const { Schema } = mongoose

const addressSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: false
  }
}, { _id: false})

const amenitiesSchema = new Schema({
  laptop: {
    type: Boolean,
    default: false
  },
  outlets: {
    type: Boolean,
    default: false
  },
  freeWiFi: {
    type: Boolean,
    default: false
  },
  tableSize: {
    type: String,
    default: ''
  },
  decor: {
    type: String,
    default: ''
  },
  music: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    enum: ["$", "$$", "$$$"],
    default: ''
  },
  food: {
    type: String,
    default: ''
  }
}, { _id: false})

const locationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: addressSchema,
    required: true
  },
  amenities: {
    type: amenitiesSchema,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
})

const Location = mongoose.model('Location', locationSchema)

export {
  Location
} 