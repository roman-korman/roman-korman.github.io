/*
 * Plugin Name: jQuery Tab Slider
 * Version: 1.0
 * Author: Geoffrey Rickaby
 * Author URL: http://www.geoffreyrickaby.com/jQueryPlugins/Tab-Slider
 * License: GNU General Public License, version 3 (GPL-3.0)
 * 
 */
$(document).ready(function() {
    var $width = 1100, //The width in pixels of your #tab-slider 
        $tabs = $('.tab'), //Your Navigation Class Name
        $delay = 600; // Pause time between animation in Milliseconds
   
    $('.tab-slider-wrapper').css({width: $tabs.length * $width});$('a.tab-link').click(function() {$tabs.removeClass('active');$(this).parent().addClass('active');var $contentNum = parseInt($(this).attr('rel'), 10);$('.tab-slider-wrapper').animate({marginLeft: '-' + ($width * $contentNum - $width)}, $delay);return false;});
	
	 $('#order').submit(function(e){							
		e.preventDefault();
		$.ajax({
			url: "sendcall.php",
			type: "POST",
			data: $("#order").serialize(),
			success: function(response) {
				//alert(response);
			}
		});
	});	
	
	$('#link').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});
	
					
});
	
	