$(document).ready(function() {
  var i = 1;
  var j = 1;

  var speak = function speak( button, usermsg, pgmsg ) {
    $(button).click(function() {
      $("ul#user").prepend( usermsg );
      $("ul#user").children("li").first().append('<span style=\"color:red\" class=\"remuser' + i +'\"> X</span>');
      i++;
      rem("ul#user", ".remuser", 7);

      $("ul#webpage").prepend(pgmsg);
      $("ul#webpage").children("li").first().append('<span style=\"color:red\" class=\"remwebpage' + j +'\"> X</span>');
      j++;
      rem("ul#webpage", ".remwebpage", 10);
      });
  };

  var rem = function rem( list, remtag, strlen ) {
    $(list).click(function ( event ) {
      var id = event.target.className;
      var idNum = id.substr(strlen);
      $(remtag + idNum).parent().remove();
    });
  };

  speak("button#hello", "<li>Hello!</li>",  "<li>Why hello there!</li>");
  speak("button#goodbye", "<li>Goodbye!</li>",  "<li>Goodbye, dear user!</li>");
  speak("button#stop", "<li>Stop copying me!</li>",  "<li>Pardon me. I meant no offense.</li>");
});
