//var exports = module.exports = {};

function contentSearch() {
  var tup = "The Unbelievable Podcast";
  var zeng = "Zeng This!";
  var stp = "Secret Transmission Podcast";

  var currentEpIds = {};

  var networkShows = [
    {"user":"unbelievable",
    "apiUri":"https://api.spreaker.com/v2/shows/1692687/episodes?limit=4"}
  ];

  $.get(networkShows[0].apiUrl, function(data) {
    $.each(data.items, function(i, item){
      var result = {};
      console.log(i, item);

      result.id = episode_id;
      currentEpIds.push(result);
    })
  });

  console.log(currentEpIds);
};

module.exports.contentSearch = contentSearch;

