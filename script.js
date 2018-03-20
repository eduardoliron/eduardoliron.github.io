$('.anchor-menu').click(function (event){
  console.log(event);
  $('html, body').animate({
      scrollTop: $(event['target']['hash']).offset().top
  }, 2000);
});
