$(document).ready(function() {
  // when the form submits
  $("#blanks form").submit(function(event) {
    //create array for user input
    var blanks = ["person1", "person2", "question", "exclamation", "verb", "noun"];
    //for each blank, input the user's input into it
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      if ( userInput === "" ) {
        $("#" + blank).closest("div").addClass("has-error");
        //alert("If you don't tell me where to send it to, I can't write you a letter!");
      } else {
        //input the address variables into the address field of the letter
        $("#" + blank).closest("div").removeClass("has-error");  
        $("." + blank).text(userInput);
      }
    });

    //show the story
    $("#story").show();
    
    //prevent the page from refreshing
    event.preventDefault();
  });

  //reset the input form, but don't delete the story
  $("#reset form").submit(function(event) {
    //assign variables to user input
    var blanks = ["person1", "person2", "question", "exclamation", "verb", "noun"];
    
    //for each form field, remove vaule and error class
    blanks.forEach(function(blank) {
      $("#" + blank).closest("div").removeClass("has-error");
      $("input#" + blank).val("");    
    });

    //prevent the page from refreshing
    event.preventDefault();
  });
});
