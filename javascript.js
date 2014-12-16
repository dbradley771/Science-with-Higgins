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
	    height: 50,                 // Distance vertically to travel
	    width: 200,                  // Distance horizontally to travel
	    sizeAdjustment: 160,         // Percentage to grow or shrink
	    loop: true,                 // Circulate continuously
	    zIndexValues: [-1, 1, 1, -1]   // Sets z-index value at each stop of animation
	});
});

$(window).scroll(function(e){
	  parallax();
	  parallaxBlueGreenPlanet();
	  parallaxplanetsBluePlanet();
	  parallaxBurningSun();
	  parallaxEarth();
	  parallaxGreenSun();
	  parallaxOrangePlanet();
	  parallaxRedMoon();
	  parallaxTanPlanet();
	  parallaxVulcanPlanet();
	});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.background').css('top',-(scrolled*.15)+'px');
}

function parallaxBlueGreenPlanet(){
    var scrolled = $(window).scrollTop();
    $('#blue-green').css('top',(scrolled*.20)+'px');
}

function parallaxplanetsBluePlanet(){
    var scrolled = $(window).scrollTop();
    $('#blue').css('top',(scrolled*.80)+'px');
}

function parallaxBurningSun(){
    var scrolled = $(window).scrollTop();
    $('#burning-sun').css('top',(scrolled*.55)+'px');
}
function parallaxEarth(){
    var scrolled = $(window).scrollTop();
    $('#earth').css('top',(scrolled*.25)+'px');
}
function parallaxGreenSun(){
    var scrolled = $(window).scrollTop();
    $('#green-sun').css('top',(scrolled*.75)+'px');
}
function parallaxOrangePlanet(){
    var scrolled = $(window).scrollTop();
    $('#orange-planet').css('top',(scrolled*.60)+'px');
}
function parallaxRedMoon(){
    var scrolled = $(window).scrollTop();
    $('#red-moon').css('top',(scrolled*.35)+'px');
}
function parallaxTanPlanet(){
    var scrolled = $(window).scrollTop();
    $('#tan-planet').css('top',(scrolled*.40)+'px');
}
function parallaxVulcanPlanet(){
    var scrolled = $(window).scrollTop();
    $('#vulcan-planet').css('top',(scrolled*1.25)+'px');
}


