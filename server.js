var express = require("express");
var bodyParser = require("body-parser");
// var router = require('./controllers/controller.js');
var methodOverride = require('method-override');
var path = require('path');
var exphbs = require('express-handlebars');
var logger = require("morgan");
var mongoose = require("mongoose");
var Episode = require("./models/Episode.js");
var Show = require("./models/Show.js");
var request = require("request");
var cheerio = require("cheerio");
var Promise = require("bluebird");
var app = express();
var PORT = process.env.PORT || 3333;

mongoose.Promise = Promise;


// Setting up express
app.use(express.static("./public"));
app.use(methodOverride('_method'));


//Body-Parser
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Setting up handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'show'
}));
app.set('view engine', 'handlebars');

// Configuring protected_dust database
var databaseUri = "mongodb://localhost/podnetwork";
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true,
  });
} else {
  mongoose.connect(databaseUri, {
    useMongoClient: true,
  });
}

var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});

var routes = require('./routes/index.js');
app.use('/', routes);
app.use('/members', routes);
app.use('/recent', routes);
app.use('/unbelievable', routes);
app.use('/zengthis', routes);
app.use('/stp', routes);

////////////////////////////////////////////////
// In Command Prompt (not Bash), including the ""
//
// Start mongoDB
// "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
//
// Connect to MongoDB
// "C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"
