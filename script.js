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
}, 500);

}

  $(".start").click(function(){
    letsPlay();
    playerMove();
  })

  function playerMove(){

    var timer = setTimeout(function(){alert("Too slow!")}, 5000)

    var checkMove = document.getElementById("test").addEventListener("click", function() {
clearTimeout(timer);
      alert("You're doing great.") })
  }



});
