$(document).ready(function() {
    $('#module-menu').accordion({ clearStyle: true, autoHeight: false, collapsible: true}); 
    //clearStyle: true, autoHeight: false makes the space of the accordion drop-down space equal to the 
    //height of only its paragraphs instead of the height of the largest accordion drop-down
});

$(document).ready(function(){
	$('#circulating-planet').circulate({
		speed: 1500,                  // Speed of each quarter segment of animation, 1000 = 1 second
	    height: 100,                 // Distance vertically to travel
	    width: 1325,                  // Distance horizontally to travel
	    sizeAdjustment: 160,         // Percentage to grow or shrink
	    loop: true,                 // Circulate continuously
	    zIndexValues: [-1, 1, 1, -1]   // Sets z-index value at each stop of animation
	});
	$('#circulating-planet-sm').circulate({
		speed: 1500,                  // Speed of each quarter segment of animation, 1000 = 1 second
	    height: 100,                 // Distance vertically to travel
	    width: 400,                  // Distance horizontally to travel
	    sizeAdjustment: 160,         // Percentage to grow or shrink
	    loop: true,                 // Circulate continuously
	    zIndexValues: [-1, 1, 1, -1]   // Sets z-index value at each stop of animation
	});
});

$(window).scroll(function(e){
	  parallax();
	});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.background').css('top',-(scrolled*.35)+'px');
}
