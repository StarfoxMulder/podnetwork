var exports = module.exports = {};

/**
 * List of Show schema keys:
 * 
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

/**
 *  List of Episode schema keys
 * 
  title
  epMediaAudio
  epDownloadUrl
  epThumb
  epSource
  epDescription
  localUrl
  date
 */

exports.contentSearch = function() {
  var tup = "The Unbelievable Podcast";
  var zeng = "Zeng This!";
  var stp = "Secret Transmission Podcast";

////// Unbelievable Podcast
  request("https://www.spreaker.com/user/unbelievable", function(error, response, html) {

    var $ = cheerio.load(html);
    var result = {};


    result.title = $(".ly_section_body h2 a").text();
    /////// below has not been adjusted for Spreaker -- going to take out Fox
    result.epMediaAudio = $(".ly_section_body").children("a").attr("href");
    result.epThumb = $(".ly_section_body").children("a").children("div").children("img").attr("src");
    result.epDescription = $(".ly_section_body").children("a").attr("title")
    result.epSource = tup;
    result.date = $("#ext-gen15").text();

    var entry = new Episode(result);

    entry.save(function(err, doc) {

      if (err) {
      }
      else {
      }
    });
  }); 

/*
  ////// Other Show X
  request("https://www.spreaker.com/user/unbelievable", function(error, response, html) {

    var $ = cheerio.load(html);

    $(".ly_section_body").each(function(i, element) {

      var result = {};

      result.title = $(this).children("a").children("span.title").text();
      result.link = $(this).children("a").attr("href");
      result.image = $(this).children("a").children("div").children("img").attr("src");
      result.snip = $(this).children("a").attr("title")
      result.source = tup;
      result.scrapeDate = Date.now();

      var entry = new Episode(result);

      entry.save(function(err, doc) {

        if (err) {
        }
        else {
        }
      });
    });
  }); 
*/

// Zeng This!
///// http://zengthis.podbean.com/
// Secret Transmission Podcast
///// https://secrettransmission.buzzsprout.com/
// Creepy Little Book
///// https://www.youtube.com/user/creepylittlebook
// Those Conspiracy Guys
///// https://thoseconspiracyguys.com/
// Emergency Exit Podcast
///// https://www.emergencyexitpodcast.com/




};

//export { contentSearch };
