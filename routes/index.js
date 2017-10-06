var express = require("express");
var router = express.Router();
var app = express();
/////////// need to change these article schemas into podcast ones
var Article = require("../models/Article.js");
var PinnedArticle = require("../models/PinnedArticle.js");
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

router.get("/news", function(req,res) {
  Article.find().sort({"scrapeDate":-1}).exec( function(err, found){
    if(err) {
    } else {
      res.render("news",{found:found});
    }
  });
});

router.get("/news2", function(req,res) {
  Article.find().sort({"scrapeDate":-1}).exec( function(err, found){
    if(err) {
    } else {
      res.render("news2",{found:found});
    }
  });
});
// router.get("/news", function(req,res) {
//   PinnedArticle.find().sort({"order":1}).exec( function(err, pinned)

//   Article.find().sort({"scrapeDate":-1}).exec( function(err, found){
//     if(err) {
//     } else {
//       res.render("news",{ pinned:pinned, found:found});
//     }
//   });
// });

router.get("/events", function(req,res) {
  res.render("events");
});

router.get("/donate", function(req,res) {
  res.render("donate");
});

router.post("/register", function(req, res) {
  console.log("req.body.userName == "+req.body.userName);
  console.log("req.body.email == "+req.body.email);
  console.log("req.body.password == "+req.body.password);
  User.register(new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  }))
});

router.get("/family", function(req,res) {
  res.render("family");
});

module.exports = router;

function articleSearch() {

  request("https://unclineberger.org/newsroom", function(error, response, html) {

    var $ = cheerio.load(html);

    $("dd.portletItem").each(function(i, element) {

      var result = {};

      result.title = $(this).children("a").children("span.title").text();
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
  }); //End of Lineberger

  // request("http://www.cancerresearch.org/news-publications/our-blog", function(error, response, html) {

  //   var $ = cheerio.load(html);

  //   $("ul.storyList").children("li").each(function(i, element) {

  //     var result = {};

  //     result.title = $(this).children("div.storySummary").children("h3").children("a").text();
  //     result.link = "http://www.cancerresearch.org/news-publications/our-blog" + $(this).children("div.storySummary").children("h3").children("a").attr("href");
  //     result.image = "http://www.cancerresearch.org/news-publications/our-blog" + $(this).children("div.storyImage").children("a").children("img").attr("src");
  //     result.snip = $(this).children("div.storySummary").children("div").children("p").text();
  //     result.source = cri;
  //     result.scrapeDate = Date.now();

  //     var entry = new Article(result);

  //     entry.save(function(err, doc) {

  //       if (err) {
  //       }
  //       else {
  //       }
  //     });
  //   });
  // }); //End of (Cancer Research Institute is not scrapable)



} //End of articleSearch

// request("https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C1CHBF_enUS714US715&ion=1&espv=2&ie=UTF-8#q=immunotherapy&tbm=nws&start=10&*", function(error, response, html) {

//     var $ = cheerio.load(html);

//     $("div.ts").each(function(i, element) {
//         console.log("Google 1 loaded");
//       var result = {};

//       result.title = $(this).children("div").children("h3").children("a").text();
//       result.link = $(this).children("a").attr("href");
//       result.image = $(this).children("a").children("img").attr("src");
//       result.snip = $(this).children("div").children("div.st").text();
//       result.source = $(this).children("div").children("div.slp").children("span").text();
//       result.scrapeDate = Date.now();

//       var entry = new Article(result);

//       entry.save(function(err, doc) {

//         if (err) {
//           console.log(err);
//         }
//         else {
//           console.log("Google pg.1: ",result);
//         }
//       });
//     });
//   }); //End of Google pg.1 results

  // request("https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C1CHBF_enUS714US715&ion=1&espv=2&ie=UTF-8#q=immunotherapy&tbm=nws&start=10&*", function(error, response, html) {

  //   var $ = cheerio.load(html);

  //   $("div.ts").each(function(i, element) {

  //     var result = {};

  //     result.title = $(this).children("div").children("h3").children("a").text();
  //     result.link = $(this).children("a").attr("href");
  //     result.image = $(this).children("a").children("img").attr("src");
  //     result.snip = $(this).children("div").children("div.st").text();
  //     result.source = $(this).children("div").children("div.slp").children("span").text();
  //     result.scrapeDate = Date.now();

  //     var entry = new Article(result);

  //     entry.save(function(err, doc) {

  //       if (err) {
  //       }
  //       else {
  //       }
  //     });
  //   });
  // }); //End of Google pg.2 results
