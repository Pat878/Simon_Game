$(document).ready(function() {

  /* var letsPlay, remove, playerMove; */
  var computerTurn = 0;
  var playerTurn = 0;
  var snd = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

  function firstMove() {
    $("#inner1").addClass("glow")
    snd.play();
    setTimeout(function() {
      $("#inner1").removeClass('glow');
    }, 500)
  }

  function secondMove() {
    $("#inner2").addClass("glow")
    snd.play();
    setTimeout(function() {
      $("#inner2").removeClass('glow');
    }, 500)
  };

  function thirdMove() {
    $("#inner3").addClass("glow")
    snd.play();
    setTimeout(function() {
      $("#inner3").removeClass('glow');
    }, 500)
  };

  function fourthMove() {
    $("#inner4").addClass("glow")
    snd.play();
    setTimeout(function() {
      $("#inner4").removeClass('glow');
    }, 500)
  };

  function letsPlay() {

    switch (true) {

      case computerTurn == 0:
        firstMove();
        break;

      case computerTurn == 1:
        firstMove();
        setTimeout(function() {
          secondMove()
        }, 1000)
        playerTurn = 1;
        playerMove();
                break;
    }

  };

  function playerMove() {

    var timer = setTimeout(function() {
      alert("Too slow!")
    }, 5000)

 switch(true) {
   case playerTurn == 0:
       document.getElementById("inner1").addEventListener("click", function() {
firstMove();
      clearTimeout(timer);
      computerTurn = 1;
      setTimeout( function() {
          letsPlay();}, 2000); })
     break;

   case playerTurn == 1:

       document.getElementById("inner1").addEventListener("click", function() {
       firstMove();       })
     document.getElementById("inner2").addEventListener("click", function() {
       secondMove();
     clearTimeout(timer);
      computerTurn = 2;
      setTimeout( function() {
          letsPlay();}, 2000);
     })


     break;
            }


  };

  $(".start").click(function() {
    letsPlay();
    playerMove();
    
  })

});
