$(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
});

$(function(){
  $("#fade-in").fadein();

});

// $(document).ready(function() {
//
//     $(".clickable").click(function() {
//       $("#initially-showing").slideToggle();
//       $("#initially-hidden").slideToggle();
//     });
// });
