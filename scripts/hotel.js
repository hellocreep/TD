;(function(){
$( function(){
			
var hotel = new Array(1);
	$('.hotelreviewd' ).each( function(){
		$(this).click(function( e ){
			e.preventDefault();
			var hname=$(this).text();

			for( var i = 0; i<hotel.length; i++)
			{
				if( hotel.indexOf(hname)==-1){ // hotel²»´æÔÚ
					hotel.push(hname);
					}
			}
			$('.viewedhotel').remove();
			$.cookie('hotel',hotel);
			var arr=$.cookie('hotel').split(',');
			var strhtml='';
			for(var i=1; i<arr.length;i++)
			{
				strhtml+='<div class="viewedhotel"><div class="viewhotelList"><div class="viewhotelPic"><img src="http://images.chinahighlights.com/hotel/Shanghai/the-bund-hotel/views-s.jpg" width="50" height="50" class="hotelSmal" original="http://images.chinahighlights.com/hotel/Shanghai/the-bund-hotel/views-s.jpg"></div><div class="viewhotelInfo"><h5><a href="/hotel/shanghai-hotels/the-bund-hotel.htm">'+arr[i]+'</a><img alt="4 Star" src="/images/reviewd/fourstar-s.png" original="/images/reviewd/fourstar-s.png"></h5></div><a class="closeWindow" val="5885" onclick="closeThis(this);" href="javascript:void(0)"> </a><div class="clear"></div></div></div>';
			}
			$('#hotelviwed').after(strhtml);
			
		});
	});
	
	function closeThis(obj)
	{
		var hotelid = $(obj).attr("val");
		var Ext = "$"+ hotelid +"$";
		var NewCK = $.cookie("hotelHistory").replace(Ext,"");
		$.cookie("hotelHistory",NewCK);
		$(Obj).parents(".viewhotelList").slideUp(200);
		setTimeout(function(){$(Obj).parents(".viewhotelList").remove()}, 200);
		return false; 
	}


});
})( jQuery )