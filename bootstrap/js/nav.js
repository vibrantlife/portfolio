$(".nav_trigger").click(function() {
  $("body").toggleClass("show_sidebar");
  $(".nav_trigger .fa").toggleClass("fa-navicon fa-times");
});

$('.scroll-link').on('click', function(event){
  event.preventDefault();
  var target = $(this).attr("data-id");
    console.log(target);
  if(target.length) {
    var targetOffset = $("#" + target).offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 800);
  }
});




// navbar open and close

// scroll to sections
