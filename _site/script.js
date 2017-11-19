var fixmeTop = $('.anchor-links').offset().top;

$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop){
        $('.anchor-links').addClass("sticky");
    } else {
        $('.anchor-links').removeClass("sticky");
    }
});

$('.goSmoothly').click(function(event){
    event.preventDefault();
    $(this).addClass('active');
    if( $('.anchor-links').hasClass("sticky")) {
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 100
    }, 500);
    } else {
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 220
    }, 500);
    }
});

$('.anchor-menu').click(function (event){
  console.log(event);
  $('html, body').animate({
      scrollTop: $(event['target']['hash']).offset().top
  }, 2000);
});

$(".followMe").each(function(i) {

    var thiselement = $(this);
    var fixTop = $(this).offset().top;
    var endScroll = fixTop + $(this).parent().height() - $(this).height() - 40;

    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixTop && currentScroll <= endScroll){
            thiselement.addClass("fixed");
            thiselement.removeClass("fixend");
        }
        else if (currentScroll >= fixTop) {
            thiselement.removeClass("fixed");
            thiselement.addClass("fixend");
        } else {
            thiselement.removeClass("fixed");
        }
    });
});

$('.name').on("mouseover", function() {
  $('.info').slideDown();
});

$('.box').on("mouseenter", function() {
  $('.info').slideUp();
});
