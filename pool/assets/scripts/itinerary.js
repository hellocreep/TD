(function(){
	function Submitform1( e ){
		e.preventDefault();
		var formobj=document.getElementById("inquiryform1");
		formobj.method="post";
		formobj.action="http://www.tibetdiscovery.com/forms/mailer.php";
		formobj.submit();
	}
$(function(){
	
	$( '.accordion p' ).hide();
	$('.accordion h6').click(function() {
		$(this).next().toggle('fast');
	}); 
	$( '.accordion h6' ).eq(0).click();
	
	$( window ).unbind( 'scroll' );
	var t = $( '.tour-tab' );
	t_top = t.offset().top;
	$( window ).bind( 'scroll',function(){
		
		if( $( this ).scrollTop() > t_top ){
			$( '.tab-replace' ).show();
			t.css({'position':'fixed','top':0,
			'z-index':10,'width':970,'background':'#FBFBF5'});
			
		}else{
			$( '.tab-replace' ).hide();
			t.css('position', 'static');
		}
	});
	
	$( '.tour-tab li' ).not( '.last' ).click(function(){
		$( this ).addClass( 'active' ).children( 'a' ).addClass( 'active' )
		.parent()
		.siblings().removeClass( 'active' )
		.children( 'a' ).removeClass( 'active' );
	});
	
	
	var gallery_list = [];
	$( '.gallery-list li' ).each( function(){
		gallery_list.push( $(this).attr('name') );
	});
	$( '.view-gallery' ).click(function(){
		$.fancybox( gallery_list,{
					'type' : 'image',
				});
	});
	
	$( '.add-wish' ).click(function(){
		$.fancybox({
				'width' : '75%',
				'height' : '75%',
				'autoScale' : false,
				'transitionIn' : 'none',
				'transitionOut' : 'none',
				'type' : 'iframe'
				});
	});
	
	$('.divReview').hide();
	$('.btn-review').click(function( e ){
		e.preventDefault();
		$( window ).scrollTop( 100 )
		$('.divReview').fadeTo(1000,1);
		});
	$('.close').click(function(){
		$('.divReview').hide();
	});
	
	$( '#inquirysub').click(Submitform1); 
})
})(jQuery);
