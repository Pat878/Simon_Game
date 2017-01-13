$(document).ready(function(){

  /* var letsPlay, remove, playerMove; */
 var turn = 0;
  var snd = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

  /* $(".inner4").mouseover(function() {
  $(this).addClass("glow");
    snd.play();
      })
  .mouseout(function(){
    $(this).removeClass("glow");

  }); */



  function letsPlay(){
  var firstMove = $(".inner4").addClass("glow")
    snd.play();
    setTimeout(function () {
    $(".inner4").removeClass('glow');
}, 500);

    if (turn == 1) {
      setTimeout(function() {firstMove}, 500);

      $(".inner3").addClass("glow")
    snd.play();
    setTimeout(function () {
    $(".inner3").removeClass('glow');
}, 500);
    }

}

  function playerMove(){

    var timer = setTimeout(function(){alert("Too slow!")}, 5000)

    var checkMove = document.getElementById("test").addEventListener("click", function() {
      $(".inner4").addClass("glow")
    snd.play();
    setTimeout(function () {
    $(".inner4").removeClass('glow');
}, 500);
clearTimeout(timer);
      turn = 1
      setTimeout(
            function() {
                letsPlay();
            },
            1000);

        })
  }


  $(".start").click(function(){
    letsPlay();
    playerMove();
  })




});
