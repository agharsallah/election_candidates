	/*=======================================
		Show responsive menu 
	=========================================*/

    $('#show-menu').on('click', function(){
		console.log('dd');

		if($('#top-menu .navbar-nav').css('display') == 'none'){
			$('#top-menu .navbar-nav').slideDown();
			$(this).html('<i class="fa fa-close"></i>');
		}else{
			console.log('b');
			$('#top-menu .navbar-nav').slideUp();
			$(this).html('<i class="fa fa-bars"></i>');
		}
	});

	function smartPosition(obj) {
		jQuery(window).scroll(function() {
			// Detect if content is being scroll offscreen.
			if ( (document.documentElement.scrollTop || document.body.scrollTop) >= jQuery(obj).offset().top - (0)) {
				jQuery('body').addClass('smartposition');
			} else {
				jQuery('body').removeClass('smartposition');
			}
		});
	};
	$('<div id="smartposition"></div>').insertBefore('#top-menu');
	smartPosition('#smartposition');	