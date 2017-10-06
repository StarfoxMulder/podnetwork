var express = require("express");
var router = express.Router();
var app = express();
var Article = require("../models/Article.js");
var logger = require("morgan");
var request = require("request");
var cheerio = require("cheerio");
var uncl = "UNC Lineberger";

module.exports = function(app) {
  var m = {};

  m.articleSearch = function(req, res) {
    console.log("is articleSearch registering anywhere?");

    request("https://unclineberger.org/newsroom", function(error, response, html) {

      var $ = cheerio.load(html);

      $("dd.portletItem").each(function(i, element) {

        var result = {};

        result.title = $(this).children("a").children("span").text();
        result.link = $(this).children("a").attr("href");
        result.image = $(this).children("a").children("div").children("img").attr("src");
        result.snip = $(this).children("a").attr("title")
        result.source = uncl;
        result.scrapeDate = Date.now();

        var entry = new Article(result);

        entry.save(function(err, doc) {

          if (err) {
          }
          else {
          }
        });
      });

    }); //End of (first unique scrape target)

  } //End of articleSearch


  /*/// basic scrape function if article structure is similar ///*/
  // function scrape(url) {

  //   request("http://www.vigilantcitizen.com/", function(error, response, html) {

  //     var $ = cheerio.load(html);

  //     $("div.td-module-thumb").each(function(i, element) {

  //       var result = {};

  //       result.title = $(this).children("a").attr("title");
  //       result.link = $(this).children("a").attr("href");
  //       result.image = $(this).children("a").children("img").attr("src");
  //       result.source = vc;
  //       result.scrapeDate = Date.now();

  //       var entry = new Article(result);

  //       entry.save(function(err, doc) {

  //         if (err) {
  //         }
  //         else {
  //         }
  //       });
  //     });
  //   })

  // }

  return m;
}

