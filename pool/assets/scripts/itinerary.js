(function(){
	
$(function(){
	
	$( '.accordion p' ).hide();
	$('.accordion h6').click(function() {
		$(this).next().toggle('fast');
	}); 
	
})
})(jQuery);
