/*To generate an array with a random sequence of numbers, I ussed the Fisher-Yates (aka Knuth) Shuffle.
https://bost.ocks.org/mike/shuffle/
https://git.daplie.com/Daplie/knuth-shuffle
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
      var i = 0

      function theLoop() {
        setTimeout(function() {
          if (arr[i] == 1) {
            firstMove()
            console.log(1)
          }

          if (arr[i] == 2) {
            secondMove()
            console.log(2)
          }
          if (arr[i] == 3) {
            thirdMove()
            console.log(3)
          }
          if (arr[i] == 4) {
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

    switch (true) {

      case computerTurn == 1:
        num = 1;
        call()
        playerMove();
        break;

      case computerTurn == 2:
        num = 2;
        call()
        playerMove();
        break;

        case computerTurn == 3:
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

    function listenForFirstMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        playerArray.push(1)
        snd1.play()
        firstMove();
        checkArray()
      })
    }

    function listenForSecondMove() {
      document.getElementById("inner2").addEventListener("click", function() {
        playerArray.push(2)
        snd2.play()
        secondMove();
        checkArray();
      })
    }

    function listenForThirdMove() {
      document.getElementById("inner3").addEventListener("click", function() {
        playerArray.push(3)
        snd3.play()
        thirdMove();
        checkArray();
      })
    }

    function listenForFourthMove() {
      document.getElementById("inner4").addEventListener("click", function() {
        playerArray.push(4)
        snd4.play()
        fourthMove();
        checkArray();
      })
    }

    function startComputerMove() {
      setTimeout(function() {
        letsPlay()
      }, 2000)
    }

    /*  var timer = setTimeout(function() {
        alert("Too slow!")
      }, 5000) */

    var indexToCheck = 0;

    function checkArray() {
      if (playerArray[0] == arr[indexToCheck]) {
        letsPlay()
      }
    }

    computerTurn++

    switch (true) {
      case playerTurn == 1:
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        break;

      case playerTurn == 2:
        indexToCheck = 1;
        listenForFirstMove();
        listenForSecondMove();
        listenForThirdMove();
        listenForFourthMove();
        break;

    }

  };

  $(".start").click(function() {
    letsPlay();

  })

});
