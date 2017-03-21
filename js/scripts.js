$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });

  $(".click").click(function() {
    $(".showing").toggle();
    $(".hidden").toggle();
  });

  // $("p.fade").click(function() {
  //   $(".slide-up").toggle();
  //   $(".slide-up").slideDown(500);
  //   // $(".slide-down").slideDown();
  // });

});
