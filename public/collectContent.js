var exports = module.exports = {};

exports.contentSearch = function() {

////// Unbelievable Podcast
  request("http://www.unbelievablepodcast.com/", function(error, response, html) {

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
  }); 


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

export { contentSearch };
