/*To generate an array with a random sequence of numbers, I ussed the Fisher-Yates (aka Knuth) Shuffle.
https://bost.ocks.org/mike/shuffle/
https://git.daplie.com/Daplie/knuth-shuffle
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

I used this resource to loop through the array with pauses: https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
*/

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1];
arr = shuffle(arr);
console.log(arr)
$(document).ready(function() {

  /* var letsPlay, remove, playerMove; */

  var computerTurn = 1;
  var playerTurn = 0;
  var strict = false;
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

    playerTurn++
    var num;

    function call() {
      var i = 0;

      function theLoop() {
        setTimeout(function() {
          if (arr[i] == 1) {
            firstMove()
            console.log(1)
          } else if (arr[i] == 2) {
            secondMove()
            console.log(2)
          } else if (arr[i] == 3) {
            thirdMove()
            console.log(3)
          } else if (arr[i] == 4) {
            fourthMove()
            console.log(4)
          }
          i++;
          if (i < num) {
            theLoop();
          }
        }, 1000)
      }
      theLoop()
    }

    var turn = $(".count").css({
      "color": "yellow",
      "vertical-align": "middle"
    }).append(computerTurn)

    switch (true) {

      case computerTurn == 1:
        turn
        num = 1;
        call()
        playerMove();
        break;

      case computerTurn == 2:
        turn
        num = 2;
        call()
        playerMove();
        break;

      case computerTurn == 3:
        turn
        num = 3;
        call()
        playerMove();
        break;

      case computerTurn == 4:
        num = 4;
        call()
        playerMove();
        break;

      case computerTurn == 5:
        num = 5;
        call()
        playerMove();
        break;

      case computerTurn == 6:
        num = 6;
        call()
        playerMove();
        break;

      case computerTurn == 7:
        num = 7;
        call()
        playerMove();
        break;

      case computerTurn == 8:
        num = 8;
        call()
        playerMove();
        break;

      case computerTurn == 9:
        num = 9;
        call()
        playerMove();
        break;

      case computerTurn == 10:
        num = 10;
        call()
        playerMove();
        break;

      case computerTurn == 11:
        num = 11;
        call()
        playerMove();
        break;

      case computerTurn == 12:
        num = 12;
        call()
        playerMove();
        break;

      case computerTurn == 13:
        num = 13;
        call()
        playerMove();
        break;

      case computerTurn == 14:
        num = 14;
        call()
        playerMove();
        break;

      case computerTurn == 15:
        num = 15;
        call()
        playerMove();
        break;

      case computerTurn == 16:
        num = 16;
        call()
        playerMove();
        break;

      case computerTurn == 17:
        num = 17;
        call()
        playerMove();
        break;

      case computerTurn == 18:
        num = 18;
        call()
        playerMove();
        break;

      case computerTurn == 19:
        num = 19;
        call()
        playerMove();
        break;

      case computerTurn == 20:
        num = 20;
        call()
        playerMove();
        break;
    }

  };

  function playerMove() {

    var playerArray = []

    var indexToCheck = 1;

    function listenForFirstMove() {

      computerTurn++
      document.getElementById("inner1").addEventListener("click", function() {
        playerArray.push(1)
        snd1.play()
        firstMove();
      })
    }

    function listenForSecondMove() {
      document.getElementById("inner2").addEventListener("click", function() {
        playerArray.push(2)
        snd2.play()
        secondMove();
      })
    }

    function listenForThirdMove() {
      document.getElementById("inner3").addEventListener("click", function() {
        playerArray.push(3)
        snd3.play()
        thirdMove();
      })
    }

    function listenForFourthMove() {
      document.getElementById("inner4").addEventListener("click", function() {
        playerArray.push(4)
        snd4.play()
        fourthMove();
      })
    }

    function startComputerMove() {
      setTimeout(function() {

        var currentArray = arr.slice(0, indexToCheck)
        var currentPlayerArray =
          playerArray.slice(0, indexToCheck)

        if (currentPlayerArray.toString() == currentArray.toString()) {

          $(".count").empty()
          letsPlay()
        } else if (strict == true && currentPlayerArray.toString() != currentArray.toString()) {
          alert("Game over! To play again in strict mode press Strict and then press Start!")
          window.location.reload(true);

        } else if (currentPlayerArray.toString() != currentArray.toString()) {
          alert("Try again!")

          $(".count").empty()
          playerArray.length = 0
          currentPlayerArray.length = 0

          computerTurn = computerTurn - 1
          playerTurn = playerTurn - 1

          letsPlay();
        }
      }, 10000)
    }

    function checkForWin() {
      setTimeout(function() {

        var currentArray = arr.slice(0, indexToCheck)
        var currentPlayerArray =
          playerArray.slice(0, indexToCheck)

        if (currentPlayerArray.toString() == currentArray.toString()) {

          $(".count").empty()
          alert("You win!")
          computerTurn = 1;
          playerTurn = 0;
          strict = false;
        } else if (strict == true && currentPlayerArray.toString() != currentArray.toString()) {
          alert("Game over! To play again in strict mode press Strict and then press Start!")
          window.location.reload(true);

        } else if (currentPlayerArray.toString() != currentArray.toString()) {
          alert("Try again!")

          $(".count").empty()
          playerArray.length = 0
          currentPlayerArray.length = 0

          computerTurn = computerTurn - 1
          playerTurn = playerTurn - 1

          letsPlay();
        }
      }, 10000)
    }

    switch (true) {
      case playerTurn == 1:

        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 2:
        indexToCheck = 2;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 3:
        indexToCheck = 3;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 4:
        indexToCheck = 4;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 5:
        indexToCheck = 5;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 6:
        indexToCheck = 6;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 7:
        indexToCheck = 7;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 8:
        indexToCheck = 8;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 9:
        indexToCheck = 9;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 10:
        indexToCheck = 10;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 11:
        indexToCheck = 11;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 12:
        indexToCheck = 12;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 13:
        indexToCheck = 13;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 14:
        indexToCheck = 14;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 15:
        indexToCheck = 15;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 16:
        indexToCheck = 16;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 17:
        indexToCheck = 17;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 18:
        indexToCheck = 18;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 19:
        indexToCheck = 19;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        startComputerMove();

        break;

      case playerTurn == 20:
        indexToCheck = 20;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        checkForWin();
        break;

    }

  };

  $(".start").click(function() {
    letsPlay();

  })

  $(".strict").click(function() {
    strict = true;
    alert("Srict mode activated! Now press Start to play!")
  })

  $(".reset").click(function() {
    window.location.reload(true);

  })

});
