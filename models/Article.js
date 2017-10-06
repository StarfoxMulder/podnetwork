var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Creating schema
var ArticleSchema = new Schema({

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
  snip: {
    type: String,
    required: false
  },
  scrapeDate: {
    type: Date,
    default: Date.now
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
