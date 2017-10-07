var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Creating schema
var ShowSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },
  showUrl: {
    type: String,
    required: true
  },
  showThumb: {
    type: String,
    required: false
  },
  artist: {
    type: String,
    required: true
  },
  subscribe: {
    type: String,
    required: false
  },
  patreon: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  type: {
    type: String,
    required: false
  },
  youtube: {
    type: String,
    required: false
  },
  order: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the Show model with the ShowSchema
var Show = mongoose.model("Show", ShowSchema);

// Export the model
module.exports = Show;

/*
  title
  showUrl
  showThumb
  artist
  subscribe
  patreon
  email
  facebook
  twitter
  type
  youtube
  order
  date
*/
  