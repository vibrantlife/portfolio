$('.bio nav li').click(function(){
    $('li').removeClass('active');
    $(this).addClass('active');
});

$('.bio nav li').on('click', function(event){
    event.preventDefault();
    var content = $(this).data();
    var contentIds = ['#skills','#contact','#about'];
    for( var contentName in contentIds ){
        $(contentIds[contentName]).addClass('hidden');
    }
    $('#' + content.id).removeClass('hidden');
});
