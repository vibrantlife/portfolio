
$('.scroll-link').on('click', function(event){
  event.preventDefault();
  var target = $(this).attr("data-id");
    console.log(target);
  if(target.length) {
    var targetOffset = $("#" + target).offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 800);
  }
});
