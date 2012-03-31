(function(){

function Submitform(){
	var formobj=document.getElementById("inquiryform");
	formobj.method="post";
	formobj.action="crmsys/getmail/";
	formobj.submit();
}

$(function(){
	var choosed = '<span class="ok"></span>'
	$( '.destination li' ).each(function(){
		$( this ).click(function(){
			$( '.container h2' ).removeClass( 'active' ).eq( 1 ).addClass( 'active' ); 
			if( $(this).children('input:checked').length>0){
				$( this ).removeClass( 'active' ).children( '.ok' ).remove();
				$( this ).children( 'input' ).attr( 'checked', false );
			}else{
				$( this ).addClass( 'active' ).append( choosed ).children( 'input' ).attr( 'checked', true );
			}
		})	
	});	
	
	$( '.city li' ).each(function(){
		$( this ).click(function(){
			$( '.container h2' ).removeClass( 'active' ).eq( 1 ).addClass( 'active' ); 
			if( $(this).children('input:checked').length>0){
				$( this ).removeClass( 'active' ).children( '.ok' ).remove();
				$( this ).children( 'input' ).attr( 'checked', false );
			}else{
				$( this ).addClass( 'active' ).append( choosed ).children( 'input' ).attr( 'checked', true );
				$( this ).siblings().removeClass( 'active' ).children( 'input' ).attr( 'checked', false);
				$( this ).siblings().children( '.ok' ).remove();
			}
		});
	});
	
	$( '.first-block' ).focus(function(){
		$( '.container h2' ).removeClass( 'active' ).eq( 0 ).addClass( 'active' ); 
	});
	$( '.third-block' ).focus(function(){
		$( '.container h2' ).removeClass( 'active' ).eq( 2 ).addClass( 'active' ); 
	});
	$( '.fourth-block' ).focus(function(){
		$( '.container h2' ).removeClass( 'active' ).eq( 3 ).addClass( 'active' ); 
	});
	
	
	
	$( '#customsub' ).click(function( e ){
		e.preventDefault();
		Submitform();
	});
	
});
})(jQuery);
