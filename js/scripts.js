$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $(".initially-hidden").slideToggle(); 
  });
  
  $("#invert form").submit(function(event) {
    //determine which button the user is clicking
    //if it is the normal one, switch to b and w
    if ($(this).closest("div").attr("id") === "wandb") {
      $("body").addClass("invert-colors");    
      $("nav").addClass("invert-colors");
    // if they are in the inverted state, switch back
    } else if ($(this).closest("div").attr("id") === "bandw") {
      $("body").removeClass("invert-colors");    
      $("nav").removeClass("invert-colors");
   }

    //show one button and hide the other
    $("#bandw").toggle();
    $("#wandb").toggle();

    //prevent the page from refreshing
    event.preventDefault();
  });
});
