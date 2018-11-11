$(".click-screen").click(function(e) {
    window.location.href='start-screen.html';
 });


 (function blink() { 
    $('.click-anywhere').fadeOut(1000).fadeIn(1000, blink); 
  })();
  
  $(".play-again").click(function(){
    window.location.href='game-screen.html';
  });
