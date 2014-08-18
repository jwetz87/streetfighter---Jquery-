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
  $(this).keydown(function(event){
   if(event.which==88)  
   $ryupics.hide();  
   $cool.show();
  }
 //else if (event which==83){
    //$ryupics.hide();
    //$ready.show();
    //$('.ryu').css({'left':'+=5px'});       
  //}
    //else if (event which==65){
    //$ryupics.hide();
    //$ready.show();
    //$('.ryu').css({'left':'-=5px'});    
//}
);
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
		
		
		
