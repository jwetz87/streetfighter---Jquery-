$(document).ready(function() {
	
var $ready = $('.ryu-ready');
var $still = $('.ryu-still');
var $ryuThrow = $(".ryu-throwing");
var $hadouken = $(".hadouken");
var $cool = $(".ryu-cool");
var $ryupics = $(".ryupics");	
	
	
  $('.ryu').mouseenter(function() {
    $ryupics.hide();
    $ready.show();
  })
  .mouseleave(function() {
    $ryupics.hide();
    $still.show();
  })
  .mousedown(function() {
    playHadouken();    
    $ryupics.hide();
    $ryuThrow.show();
    $hadouken.finish().show()
    .animate(
      {'left': '975px'},
      1000,
      function() {
        $(this).hide();
        $(this).css('left', '475px');
      }
    );
  })
  .mouseup(function() {
    $ryupics.hide();
    $ready.show();
  });
  $(this).keydown(function(event){
   if(event.which==88){  
   $ryupics.hide();  
   $cool.show();
  }
 else if (event.which==83){
    $ryupics.hide();
    $ready.show();
    $('.ryu').css({'left':'+=5px'});       
  }
    else if (event.which==65){
    $ryupics.hide();
    $ready.show();
    $('.ryu').css({'left':'-=5px'});    
}
  });
   $(this).keyup(function(event){
   if(event.which==88)  
   $ryupics.hide();  
   $still.show();
  });
});




function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}