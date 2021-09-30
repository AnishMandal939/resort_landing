$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".nag").css("background" , "blue");
	  }

	  else{
		  $(".nag").css("background" , "#fafafa");  	
	  }
  })
})