$(document).ready(function() {

  /* var letsPlay, remove, playerMove; */
  var computerTurn = 0;
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
    }, 1000)
  };

  function thirdMove() {
    $("#inner3").addClass("glow")
    snd.play();
    setTimeout(function() {
      $("#inner3").removeClass('glow');
    }, 1000)
  };

  function fourthMove() {
    $("#inner4").addClass("glow")
    snd.play();
    setTimeout(function() {
      $("#inner4").removeClass('glow');
    }, 1000)
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
        break;
    }

  };

  function playerMove() {

    var timer = setTimeout(function() {
      alert("Too slow!")
    }, 5000)

     document.getElementById("inner1").addEventListener("click", function() {
firstMove();
      clearTimeout(timer);
      computerTurn = 1
      setTimeout( function() {
          letsPlay();}, 2000); })

    document.querySelectorAll("inner1 inner2").addEventListener("click", function() {
firstMove();
      secondMove();
      clearTimeout(timer);
      computerTurn = 1
      setTimeout( function() {
          letsPlay();}, 2000); })

  };

  $(".start").click(function() {
    letsPlay();
    playerMove();
  })

});
