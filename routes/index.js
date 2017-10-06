var express = require("express");
var router = express.Router();
var app = express();
var Show = require("../models/Show.js");
var Episode = require("../models/Episode.js");
/////////// Creepy Little Book is a youtube channel -- might be other interesting ones out there
var logger = require("morgan");
var Promise = require("bluebird");
var request = require("request");
var cheerio = require("cheerio");
var search = require("../public/collectContent.js");

/////  Routes  \\\\\
/////  ======  \\\\\

////////
// changed articleSearch to showSearch
router.get("/", function(req,res) {
  search.contentSearch();
  res.render("index");
});

router.get("/members", function(req,res) {
  Show.find().sort({"scrapeDate":-1}).exec( function(err, found){
    if(err) {
    } else {
      res.render("news",{found:found});
    }
  });
});

router.get("/recent", function(req,res) {
  Episode.find().sort({"date":-1}).exec( function(err, found){
    if(err) {
    } else {
      res.render("recent",{found:found});
    }
  });
});

router.get("/unbelievable", function(req,res) {
  res.render("unbelievable");
});

router.get("/zengthis", function(req,res) {
  res.render("zengthis");
});

router.get("/stp", function(req,res) {
  res.render("stp");
});

module.exports = router;

//////// Need to research how to use multiple handlebars layouts 
//////// and best way to make multiple calls to mongoDB for Episode and Show data