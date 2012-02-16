;(function(){
$( function(){
			
	$( '.hotelreviewd' ).each( function(){
		$( this ).click(function( e ){
			e.preventDefault();
			var hotel = $( this ).text();
			var hotelHistory = $.cookie( 'hotel_history' );
			
			
			$.cookie( 'hotel_history', hotelHistory, { expires: 8, path: '/' } );
			alert( $.cookie('hotel_history') );
			//$.cookie( 'hotel_history', null )
		});
	});
	
	function closeThis(obj)
	{
		var hotelid = $(obj).attr("val");
		var Ext = "$"+ hotelid +"$";
		var NewCK = $.cookie("hotel").replace(Ext,"");
		$.cookie("hotel",NewCK);
		$(obj).parents(".viewhotelList").slideUp(200);
		setTimeout(function(){$(obj).parents(".viewhotelList").remove()}, 200);
		return false; 
	}

});
})( jQuery )