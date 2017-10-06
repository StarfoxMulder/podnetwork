var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Creating schema
var EpisodeSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },
  epMediaAudio: {
    type: String,
    required: true
  },
  epThumb: {
    type: String,
    required: false
  },
  epSource: {
    type: String,
    required: true
  },
  epDescription: {
    type: String,
    required: false
  },
  localUrl: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the Episode model with the EpisodeSchema
var Episode = mongoose.model("Episode", EpisodeSchema);

// Export the model
module.exports = Episode;
