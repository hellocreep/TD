(function(){
function get_schedule(){
	$.ajax({
		url: '//',
		data: {
			tour_id: '',
			month: '',
			year: '',
		},
		success: function( result ){
			
		}
	});
}
	
$(function(){
	$( '.tour-container .tour-num' ).each(function( index ){
		$( this ).text( index+1 );
	});
	
	$( '.schedule-arrow' ).each(function(){
		$( this ).click(function(){
			
		});
	});
	
	$(' .addwish').fancybox({
		'width' : '50%',
		'scrolling': 'auto',
		'height': '75%',
		'transitionIn' : 'none',
		'transitionOut' : 'none',
		'type' : 'iframe',
		//'onClosed':function(){window.location.href=window.location.href;}
	}); 
});
})(jQuery);
