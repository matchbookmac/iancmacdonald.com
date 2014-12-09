$(document).ready(function() {
  // when the form submits
  $("#blank form").submit(function(event) {
    //assign variables to user input
    var shoutInput = $("input#usrinput").val();
    
    //check to see if they input anything;
    if ( shoutInput === "") { 
      alert("If you don't give me anything, I can't shout anything");
    }

    //input the user input into the page after converting to uppercase
    shoutInput = shoutInput.toUpperCase();
    $(".output").text(shoutInput);
    
    //show the text
    $("#shout").show();
    
    //clear form field
    $("input#usrinput").val("");
 
    //prevent the page from refreshing
    return false;
    event.preventDefault();
  });
});
