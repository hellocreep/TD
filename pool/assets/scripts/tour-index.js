(function(){
	
	var _timer_;
	function mainautoshow( imgs, intime, outtime, delay ) {
		$( imgs+" img:not(:last)" ).hide();	
		_timer_ = setInterval( function() {
			var activemainAd = $( imgs+" img:visible" ),
			next = activemainAd.next();
			if ( !next.length ) {
				next = $( imgs+" img:first" );
			}
			next.show().css( 'z-index', 0 );
			activemainAd.fadeOut( outtime,function(){
				next.css( 'z-index',1 );
			});
		}, delay );
	} 
$(function(){
	
	mainautoshow( '.banner',1000,2000,5000);
	
	$( '.tour-rank' ).each(function( index ){
		$( this ).text( index+1 );
	});
	$( '.tour-price' ).eq( 3 ).hide();
	
	$( '.fancybox' ).fancybox();
})
})(jQuery);
