$(document).ready(function() {
  // when the form submits
  $("#blanks form").submit(function(event) {
    //assign variables to user input
    var blanks = ["name", "address1", "city", "state", "zipCode", "date"];
    
    //for each input in blanks
    blanks.forEach(function(blank) {
      //give user input to a string
      var userInput = $("input#" + blank).val();
      console.log(userInput);
      //See if form is left blank
      if ( userInput === "" ) {
        $("#" + blank).closest("div").addClass("has-error");
        //alert("If you don't tell me where to send it to, I can't write you a letter!");
      } else {
        //input the address variables into the address field of the letter
        $("#" + blank).closest("div").removeClass("has-error");
        $("." + blank).text(userInput);
      }   
    });
    
    //show the letter
    $("#letter").show();
    
    //prevent the page from refreshing
    event.preventDefault();   
  });

  $("#reset form").submit(function(event) {

    //assign variables to user input
    var blanks = ["name", "address1", "city", "state", "zipCode", "date"];
    
    //for each form field, remove vaule and error class
    blanks.forEach(function(blank) {
      $("#" + blank).closest("div").removeClass("has-error");
      $("input#" + blank).val("");    
    });

    //prevent the page from refreshing
    event.preventDefault();
  });
});