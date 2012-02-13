;(function(){
    //sidebar同步content 有没其他可以不写js的方法实现？ 
   var autoHeight = function(){
       var side_height = $( '.sidebar' ).height();
       if( side_height <1000 ){
           $( '.sidebar' ).height( 1200 )
       }else{
           $( '.sidebar' ).height($( '.content' ).height() + 60);
       }
   }
    
$( function(){
    
    autoHeight();
    
    //contact us 弹出框
    $( '#call-you' ).click( function(){
       $( '.tiny-form' ).slideToggle( 'slow' ); 
    });
    //contact us 表单验证
    $( '#inquiryform' ).validate();  
    $( '.close-tinyform' ).css('cursor','pointer').click(function(){
		$( '.tiny-form' ).hide();
	});
    //sidebar弹出框
    $( '.have-arrow li' ).each(
        function(){
            $( this ).hover( function(){
                $( this ).children( '.poptips' ).fadeIn( 100 );
            },function(){
                $( this ).children( '.poptips' ).fadeOut( 100 );
            })
        }
    );
    
	//头部menu下拉效果
	$('#tibetTours').hide();
    
    $('#travelStyle').hide();
    
    $('#menus>li:eq(1)').hover(function(){
        $('#tibetTours').show();
    },function(){
        $('#tibetTours').hide();
    })
    
    $('#menus>li:eq(2)').hover(function(){
        $('#travelStyle').show();
    },function(){
        $('#travelStyle').hide();
    });
	
	/****newsletter**/
	$('#submit').click( function( e ){
    e.preventDefault();
	var email=$('#newsletter').val();
    $.ajax({ 
      url: "http://www.tibetdiscovery.com/forms/newsletter.php?email="+email+"&&"+Math.random(),
	context: '',
	 success: function( data ){
		if( data=="1")
	 {
		alert('Thank you for subscribing to our newsletter. The tibetdiscovery Team');
	 }
	 else if( data=="2")
	  {
		alert('You are already registered to our newsletter. We hope you have enjoyed our previous publications.');
	 }
	 else 
	  {
		alert('The system is busy, please try again later.');
	 }
  },
error: function(){
 alert('error')
}
});
});

});

})( jQuery );


//头部导航下拉列表效果
