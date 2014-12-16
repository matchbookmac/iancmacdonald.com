$(document).ready(function() {

  //function accepts the ids for the different about types
  var disptexts = function disptexts( formid , hideid1, hideid2 ) {

    //when the image for the id is clicked
    $("#" + formid).click(function() {

      //show the appropriate text
      $("#" + formid +"text").removeClass("hidden");
      $("#" + formid +"text").addClass("shown");
      //hide the rest
      $("#" + hideid1 +"text").removeClass("shown");
      $("#" + hideid1 +"text").addClass("hidden");

      $("#" + hideid2 +"text").removeClass("shown");
      $("#" + hideid2 +"text").addClass("hidden");

      //identify the header of the id that was clicked and unidentify the rest
      $("#" + formid +"head").addClass("bg-info");
      $("#" + hideid1 +"head").removeClass("bg-info");
      $("#" + hideid2 +"head").removeClass("bg-info");
      event.preventDefault();
    });
  };

  disptexts ( "wood" , "metal" , "craft")
  disptexts ( "metal" , "wood" , "craft")
  disptexts ( "craft" , "metal" , "wood")
});
