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
	
	$( '#customsub' ).click(function( e ){
		e.preventDefault();
		Submitform();
	});
	
});
})(jQuery);
