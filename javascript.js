// JS for accordion menu
$(document).ready(function() {
	$('#module-menu').accordion({ clearStyle: true, autoHeight: false, collapsible: true}); 
    //clearStyle: true, autoHeight: false makes the space of the accordion drop-down space equal to the 
    //height of only its paragraphs instead of the height of the largest accordion drop-down
});


// JS for circulating planet
$(document).ready(function(){
	$('#circulating-planet').circulate({
		speed: 1500,                 // Speed of each quarter segment of animation, 1000 = 1 second
	    height: 100,                 // Distance vertically to travel
	    width: 1325,                 // Distance horizontally to travel
	    sizeAdjustment: 160,         // Percentage to grow or shrink
	    loop: true,                  // Circulate continuously
	    zIndexValues: [-1, 1, 1, -1] // Sets z-index value at each stop of animation
	});
	$('#circulating-planet-sm').circulate({
		speed: 1500,                 // Speed of each quarter segment of animation, 1000 = 1 second
	    height: 50,                  // Distance vertically to travel
	    width: 250,                  // Distance horizontally to travel
	    sizeAdjustment: 160,         // Percentage to grow or shrink
	    loop: true,                  // Circulate continuously
	    zIndexValues: [-1, 1, 1, -1] // Sets z-index value at each stop of animation
	});
});

// Call parallax on scroll
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

//
// Start of Parallax JS
// Parallax makes the background move at a different rate than the rest of the page when scrolling
//

function parallax(){ // Background
    var scrolled = $(window).scrollTop();
    $('.background').css('top',-(scrolled*.15)+'px'); // How far to move the element from the top of the page based on scroll
}

function parallaxBlueGreenPlanet(){ // Blue Green Planet
    var scrolled = $(window).scrollTop();
    $('#blue-green').css('top',(-scrolled*.16 + 210)+'px');
}

function parallaxplanetsBluePlanet(){ // Blue Planet
    var scrolled = $(window).scrollTop();
    $('#blue').css('top',(-scrolled*.18 + 120)+'px');
}

function parallaxBurningSun(){ // Burning Sun
    var scrolled = $(window).scrollTop();
    $('#burning-sun').css('top',(-scrolled*.11 + 500)+'px');
}
function parallaxEarth(){ // Earth
    var scrolled = $(window).scrollTop();
    $('#earth').css('top',(-scrolled*.12 + 720)+'px');
}
function parallaxGreenSun(){ // Green Sun
    var scrolled = $(window).scrollTop();
    $('#green-sun').css('top',(-scrolled*.08 + 200)+'px');
}
function parallaxOrangePlanet(){ // Orange Planet
    var scrolled = $(window).scrollTop();
    $('#orange-planet').css('top',(-scrolled*.20 + 325)+'px');
}
function parallaxRedMoon(){ // Red Moon
    var scrolled = $(window).scrollTop();
    $('#red-moon').css('top',(-scrolled*.25 + 628)+'px');
}
function parallaxTanPlanet(){ // Tan Planet
    var scrolled = $(window).scrollTop();
    $('#tan-planet').css('top',(-scrolled*.21 + 500)+'px');
}
function parallaxVulcanPlanet(){ // Vulcan Planet
    var scrolled = $(window).scrollTop();
    $('#vulcan-planet').css('top',(-scrolled*.15  + 150)+'px');
}

// Un-fix navbar and remove padding from body when under 300px
function resize() {
	var width = $(window).width();
	if (width < 300) {
			document.getElementById("navbar").className = document.getElementById("navbar").className.replace( /(?:^|\s)navbar-fixed-top(?!\S)/g , '' );
			document.getElementById("body-container").style.paddingTop = "0px";
	} else {
		if (!document.getElementById("navbar").className.match(/(?:^|\s)navbar-fixed-top(?!\S)/)) {
			document.getElementById("navbar").className += " navbar-fixed-top";
			document.getElementById("body-container").style.paddingTop = "51px";
		}
	}
};

// Call resize on window resize and on load
window.onresize = resize;
window.onload = resize;
