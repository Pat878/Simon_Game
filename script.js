$(document).ready(function() {

  /* var letsPlay, remove, playerMove; */
  var turn = 0;
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

  function letsPlay() {

    switch (true) {

      case turn == 0:
        firstMove();
        break;

      case turn == 1:
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

    var checkMove = document.getElementById("inner1").addEventListener("click", function() {

      $("#inner1").addClass("glow")
      snd.play();
      setTimeout(function() {
        $("#inner1").removeClass('glow');
      }, 500)
      clearTimeout(timer);
      turn = 1
      setTimeout(
        function() {
          letsPlay();
        },
        2000);

    })
  }

  $(".start").click(function() {
    letsPlay();
    playerMove();
  })

});
