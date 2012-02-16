;(function(){
$( function(){
			
var hotel = new Array(1);
var hotelhistory='';
	$('.hotelreviewd' ).each( function(){
		$(this).click(function( e ){
			e.preventDefault();
			var hname=$(this).text();
			var hid=$(this).attr("val");
			alert(hname);
			$('#hotelviwed').after(strhtml);
			
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