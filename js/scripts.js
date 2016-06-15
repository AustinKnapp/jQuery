$(function() {



  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });

  $(".click").click(function() {
    $("#fade-in").fadeToggle();

  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    $("body").addClass("custom1");
    });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    $("body").addClass("custom2");
    });

});
