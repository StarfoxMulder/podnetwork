window.onload = function() {
  $(".featuredIcon").click(function(e){
    $(".featuredIcon").removeClass("bot-left");
    $(this).addClass("bot-left");

    $("#featuredMedia").empty();
    src = $(this).data("src");
    $("#featuredMedia").attr("src", src);
  })

  $("#cj").hover( function() {
    console.log("general sytax is firing the hover");
    $(".container").attr("background-image", "./assets/images/cjActive.gif");
  });

};
// $(".familyMember").click(function(e){
//   $(this).addClass("active")
//   function changeImg() {
//     var name = $(this).attr("id");
//     var image = name + "Pic";


//   }
//   $(".")
//   setInterval(changeImg, 1000);
// })


// $('body').on('click', 'img', function(){
// 		var state = $(this).attr('data-state');
// 		console.log(state);

// 		if (state == 'still') {
// 			$(this).attr('data-state', 'playing');
// 			$(this).attr('src', $(this).attr('data-animate'));
// 		}
// 		else if (state != 'still') {
// 			console.log('bloop?');
// 			$(this).attr('data-state', 'still');
// 			$(this).attr('src', $(this).attr('data-still'));
// 		}
// 	});