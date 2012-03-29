(function(){
function get_schedule(id,y,m,num,current_target){
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
			$( '.cal-wrap' ).eq(num).html(result);
			
			schedule( current_target.children( '.schedule-arrow' ) );
			
		}
	});
}

function schedule( target ){
	target.each(function( index ){
		
				$( this ).click(function(){
					var target;
					var current_target = $( this ).parent();
					if( index==1 || index==0)
					{
						target=0;
					}else if(index==2 || index==3)
					{
						target=1;
					}
					else
					{
						target=2;
					}
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
						get_schedule(tourid,year,month,target,current_target);	
					}
				});
			});
}
	
$(function(){
    //TODO
    //点击date跳转页面弹出form
    
	$( '.tour-container .tour-num' ).each(function( index ){
		$( this ).text( index+1 );
	});
	
	schedule( $( '.schedule-arrow') );
	
	//FANCYBOX addwish
	$( '.addwish' ).fancybox({
		'width' : '50%',
		'scrolling': 'auto',
		'height': '75%',
		'transitionIn' : 'none',
		'transitionOut' : 'none',
		'type' : 'iframe'
		//'onClosed':function(){window.location.href=window.location.href;}
	}); 
	//schedule 形式切换
	$( '.schedule-tab li' ).each(function(){
		$( this ).click(function(){
			var t = $( this ).attr( 'name' );
			$( this ).addClass( 'active' )
			.siblings().removeClass( 'active' )
			.parent().siblings( '.schedule-wrap' ).hide()
			.siblings( '.'+t ).show(); 
		});
	});
	
});
})(jQuery);
