;(function(){
	var shiftHotel = function(obj)
	{
		var hotelid = $( this ).attr("val");
		var Ext = "$"+ hotelid +"$";
		var NewHistory = $.cookie("hotelHistory").replace(Ext,"");
		$.cookie( "hotelHistory" ,NewHistory );
		$( this ).parents( ".viewhotelList" ).slideUp(200);
		setTimeout( function(){ $( this ).parents( ".viewhotelList" ).remove()}, 200);
		return false; 
	}
	
$( function(){
	//cookie能存储的长度太短，只存hotelId 由服务器判断hotelId来返回hotel信息		
	hotelHistory = $.cookie( 'hotelHistory' );

});
})( jQuery )
