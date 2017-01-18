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
var arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
arr = shuffle(arr);
var newArr = arr.slice(0, 4)
console.log(arr);

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
    switch (true) {

      case computerTurn == 1:
        if (arr[0] == 1) {
          firstMove()
        } else if (arr[0] == 2) {
          secondMove()
        } else if (arr[0] == 3) {
          thirdMove()
        } else if (arr[0] == 4) {
          fourthMove()
        }
        playerMove();
        console.log(arr[0])
        break;

      case computerTurn == 2:
        console.log(sequence.push(move))
        break;

      case computerTurn == 3:
        console.log(sequence.push(move))
        playerMove()
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
        console.log(playerArray);
      })
    }

    function listenForSecondMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        playerArray.push(2)
        snd1.play()
        secondMove();
        console.log(playerArray);
      })
    }

    function listenForThirdMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        playerArray.push(3)
        snd1.play()
        thirdMove();
        console.log(playerArray);
      })
    }

    function listenForFourthMove() {
      document.getElementById("inner1").addEventListener("click", function() {
        playerArray.push(4)
        snd1.play()
        fourthMove();
        console.log(playerArray);
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
        if (arr[0] == 1) {
          listenForFirstMove();
          clearTimeout(timer);
        } else if (arr[0] == 2) {
          listenForSecondMove();
          clearTimeout(timer);
        } else if (arr[0] == 3) {
          listenForThirdMove();
          clearTimeout(timer);
        } else if (arr[0] == 4) {
listenForFourthMove();
          clearTimeout(timer);
        }

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

        letsPlay()
        clearTimeout(timer);
        break;
    }

  };

  $(".start").click(function() {
    letsPlay();

  })

});
