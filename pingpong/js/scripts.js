$(document).ready(function() {
  //Ask user for input
  var usrinpt = prompt("What number would you like me to ping-pong up to?");
  
  //define a function "ping" for playing ping-pong
  var ping = function ping (x) {
    // if the user does not provide a real, non-negative whole number greater than 0, 
    // ask again
    while (x/1 != x || x <= 0 || x % 1 != 0) {
      x = prompt("You can only play Ping-pong with real, non-negative whole numbers > 0. Please enter a number:");
    };

    console.log(x/1);
    //until we reach the user's number
    for (var i = 1; i <= x; i++) {
      // append "ping-pong" to the list if the user's input is divisible by 3 and 5
      if (i % 3 === 0 && i % 5 === 0) {
        $("ul#numbers").append("<li>ping-pong</li>");
      // append "ping" to the list if the user's input is divisible by 3
      } else if (i % 3 === 0 && i % 5 !=0) {
        $("ul#numbers").append("<li>ping</li>");
      // append "pong" to the list if the user's input is divisible by 5
      } else if (i % 5 === 0 && i % 3 !=0) {
        $("ul#numbers").append("<li>pong</li>");
      // append the current number to the list if the user's input is not divisible by 3 and 5
      } else if (i % 3 != 0 && i % 5 !=0){
        $("ul#numbers").append('<li>' + i + '</li>');
      // if none of the above is true, something is amiss, refresh.
      } else {
        alert("This shouldn't be possible, but you have broken the game.");
        document.location.reload(true);
      }
    };
    
    //show the list
    $("ul#numbers").show();
  
  };
  
  // call the ping-pong function
  ping(usrinpt);
  
  //play again button refreshes the page
  $("form#playAgain").submit(function(event) {
    //probably redundant but wanted to try it out
    document.location.reload(true);
    event.preventDefault();
  });

});
