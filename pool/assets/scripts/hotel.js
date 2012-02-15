;(function(){
$( function(){
			
var hotel = new Array(1);
var hotelhistory='';
	$('.hotelreviewd' ).each( function(){
		$(this).click(function( e ){
			e.preventDefault();
			var hname=$(this).text();
			var hid=$(this).attr("val");
			if (hotelhistory.indexOf(hid+','+hname)<0)
			{
				hotelhistory +=hid+','+hname+',';
			}
			alert(hotelhistory);
			if( hotel.indexOf(hname)==-1)
			{
			}
			
			$('.viewedhotel').remove();
			$.cookie('hotel',hotel[hid]);
			var arr=$.cookie('hotel').split(',');
			var strhtml='';
			for(var i=1; i<arr.length;i++)
			{
				if(arr[i]!='')
				{
					
				strhtml+='<div class="viewedhotel"><div class="viewhotelList"><div class="viewhotelPic"><img src="http://images.chinahighlights.com/hotel/Shanghai/the-bund-hotel/views-s.jpg" width="50" height="50" class="hotelSmal" original="http://images.chinahighlights.com/hotel/Shanghai/the-bund-hotel/views-s.jpg"></div><div class="viewhotelInfo"><h5><a href="/hotel/shanghai-hotels/the-bund-hotel.htm">'+arr[i]+'</a><img alt="4 Star" src="/images/reviewd/fourstar-s.png" original="/images/reviewd/fourstar-s.png"></h5></div><a class="closeWindow" val="5885" onclick="closeThis(this);" href="javascript:void(0)"> </a><div class="clear"></div></div></div>';
				}
			}
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