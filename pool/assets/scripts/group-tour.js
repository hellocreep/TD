(function(){
function get_schedule(id,y,m){
	$.ajax({
		url: 'http://www.tibetdiscovery.com/assets/snippets/grouptour/group-tour.php',
		type:'POST',
		dataType:'html',
		data: {
			tour_id: id,
			month: m,
			year: y
		},
		success: function( result ){
			$('.schedule-wrap').html(result);
			$( '.schedule-arrow' ).each(function(){
				$( this ).click(function(){
					var tourid=$(this).parent().attr('name');
					var year=$(this).siblings('.schedule-year').text();
					var month;
					var date=new Date();
					if( $(this).hasClass('arrow-prev') ){
						month = $( this ).siblings( '.schedule-month' ).attr( 'name' )*1-1;
					}else{
						month = $( this ).siblings( '.schedule-month' ).attr( 'name' )*1+1;
					}
					var monthnow=date.getMonth();
					if(month==0)
					{
						month=12;
						year=year-1;
					}
					else if(month==13)
					{
						month=1;
						year=year+1;
					}
					if(month>=monthnow)
					{
						get_schedule(tourid,year,month);	
					}
				});
			});
		}
	});
}
	
$(function(){
	$( '.tour-container .tour-num' ).each(function( index ){
		$( this ).text( index+1 );
	});
	
	$( '.schedule-arrow' ).each(function(){
		$( this ).click(function(){
			var tourid=$(this).parent().attr('name');
			var year=$(this).siblings('.schedule-year').text();
			var month;
			var date=new Date();
			if( $(this).hasClass('arrow-prev') ){
				month = $( this ).siblings( '.schedule-month' ).attr( 'name' )*1-1;
			}else{
				month = $( this ).siblings( '.schedule-month' ).attr( 'name' )*1+1;
			}
			var monthnow=date.getMonth();
			if(month==0)
			{
				month=12;
				year=year-1;
			}
			else if(month==13)
			{
				month=1;
				year=year+1;
			}
			if(month>=monthnow)
			{
				get_schedule(tourid,year,month);	
			}
		});
	});
	
	$( '.addwish' ).fancybox({
		'width' : '50%',
		'scrolling': 'auto',
		'height': '75%',
		'transitionIn' : 'none',
		'transitionOut' : 'none',
		'type' : 'iframe'
		//'onClosed':function(){window.location.href=window.location.href;}
	}); 
});
})(jQuery);
