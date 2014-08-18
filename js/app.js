$(document).ready(function() {
	
var $ready = $('.ryu-ready');
var $still = $('.ryu-still');
var $ryuThrow = $(".ryu-throwing");
var $hadouken = $(".hadouken");
var $cool = $(".ryu-cool");
var $ryupics = $(".ryupics");	
	
	
  $('.ryu').mouseenter(function() {
    $still.hide();
    $ready.show();
  })
  .mouseleave(function() {
    $ready.hide();
    $still.show();
  })
  .mousedown(function() {
    playHadouken();    
    $ready.hide();
    $ryuThrow.show();
    $hadouken.finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $ryuThrow.hide();
    $ready.show();
  });
});




function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
		
		
		
