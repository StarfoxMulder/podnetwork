var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Creating schema
var EventSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  source: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  scrapeDate: {
    type: Date,
    default: Date.now
  }
});

// Create the Event model with the EventSchema
var Event = mongoose.model("Event", EventSchema);

// Export the model
module.exports = Event;
