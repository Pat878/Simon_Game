$(document).ready(function() {

  /* var letsPlay, remove, playerMove; */
  var computerTurn = 1;
  var playerTurn = 0;
  var snd1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  var snd2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var snd3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var snd4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

  function firstMove() {
    $("#inner1").addClass("glow")
    snd1.play();
    var compTimer = setTimeout(function() {
      $("#inner1").removeClass('glow');
    }, 500)
  }

  function secondMove() {
    $("#inner2").addClass("glow")
    snd2.play();
    setTimeout(function() {
      $("#inner2").removeClass('glow');
    }, 500)
  };

  function thirdMove() {
    $("#inner3").addClass("glow")
    snd3.play();
    setTimeout(function() {
      $("#inner3").removeClass('glow');
    }, 500)
  };

  function fourthMove() {
    $("#inner4").addClass("glow")
    snd4.play();
    setTimeout(function() {
      $("#inner4").removeClass('glow');
    }, 500)
  };

  function letsPlay() {
    playerTurn++;
    switch (true) {

      case computerTurn == 1:

        firstMove();
        console.log(playerTurn)
        playerMove();
        break;

      case computerTurn == 2:

        firstMove();
        console.log(playerTurn)
        setTimeout(function() {
          secondMove()
        }, 1000)
        playerMove();
        break;

      case computerTurn == 3:

        firstMove();
        console.log(playerTurn);
        setTimeout(function() {
          secondMove()
        }, 1000)
        setTimeout(function() {
          thirdMove()
        }, 2000)
        playerMove();
        break;

    }

  };

  function playerMove() {

    function listenForFirstMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        $("#inner1").addClass("glow")
        snd1.play();
        setTimeout(function() {
          $("#inner1").removeClass('glow');
        }, 500)
      })
    }

    function listenForSecondMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        secondMove();
      })
    }

    function listenForThirdMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        thirdMove();
      })
    }

    function listenForFourthMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        fourthMove();
      })
    }

    function startComputerMove() {
      setTimeout(function() {
        letsPlay()
      }, 2000)
    }

    var timer = setTimeout(function() {
      alert("Too slow!")
    }, 5000)

    computerTurn++

    switch (true) {
      case playerTurn == 1:
        document.getElementById("inner1").addEventListener("click", function() {
          snd1.play();
          clearTimeout(timer);
          startComputerMove()
        });
        break;

      case playerTurn == 2:
        listenForFirstMove();
        document.getElementById("inner2").addEventListener("click", function() {
          snd2.play();
          clearTimeout(timer);
          startComputerMove()
        })

        break;

      case playerTurn == 3:

        computerTurn = 1000
        playerTurn = 1000
        clearTimeout(timer);
        break;
    }

  };

  $(".start").click(function() {
    letsPlay();

  })

});
