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
	
	function slideshow(){
		$( '.map-list li' ).each(function( index ){
			$( this ).hover(function(){
				$( this ).children( '.crystal-bubble' ).fadeIn();
				$( this ).addClass( 'active' ).siblings().removeClass( 'active' );
				$( '.banner > img' ).eq( index ).fadeIn().siblings( 'img' ).hide();
			},function(){
				$( this ).children( '.crystal-bubble' ).fadeOut();
			});
		});
	}
$(function(){
	
	if( $('.allpage-wrap').attr('name')=='china'){
		$( '.expat' ).hide();
		$( '.crystal-bubble' ).eq( 0 ).show();
		$( '.banner > img:not(:first)' ).hide();
		slideshow();
		$( '.allpage-wrap' ).removeClass( 'BL-color' ).addClass( 'china-color' );
		$( '.tour-block' ).css( 'background','url(/imagesnew/tour-index/bg-tour.png) repeat-x 0 0 #ffffff');
	}else{
		mainautoshow( '.banner',1000,2000,5000);
	}
	
	$( '.tour-rank' ).each(function( index ){
		$( this ).text( index+1 );
	});
	$( '.tour-price' ).eq( 3 ).hide();
	
	$( '.fancybox' ).fancybox();
	$( '.fancybox' ).hover(function(){
			$(this).append('<span class="zoom"></span>');
		},function(){
			$(this).children('.zoom').remove();
	}); 
	
})
})(jQuery);
