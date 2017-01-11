
$(document).ready(function(){

 var letsPlay, remove, playerMove;

  var snd = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");

  /* $(".inner4").mouseover(function() {
  $(this).addClass("glow");
    snd.play();
      })
  .mouseout(function(){
    $(this).removeClass("glow");

  }); */



  function letsPlay(){
  $(".inner4").addClass("glow")
    snd.play();
    setTimeout(function () {
    $(".inner4").removeClass('glow');
}, 100);
    playerMove();

}

  $(".start").click(function(){
    letsPlay();
  })

  function playerMove(){
  /*If player clicks the correct div alert */

  }



});
