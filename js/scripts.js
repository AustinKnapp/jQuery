$(function() {



  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });

  $(".click").click(function() {
    $("#fade-in").fadeToggle();

  });

});
