;(function(){
    //sidebar同步content 有没其他可以不写js的方法实现？ 
   var autoHeight = function(){
       var content_height = $( '.content' ).height();
       if( content_height <1500 || content_height>2500){
           $( '.sidebar' ).height( 1500 )
       }else{
           $( '.sidebar' ).height($( '.content' ).height() + 60);
       }
   }
   
   $.fn.autoHeight = function(){
       var content_height = $( '.content' ).height();
       if( content_height <1000 ){
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
    $( '#callbackform' ).validate();  
    $( '.close-tinyform' ).css('cursor','pointer').click(function(){
		$( '.tiny-form' ).hide();
	});
    //sidebar弹出框
    $( '.have-arrow li' ).each(
        function(){
			var _timeout;
            $( this ).hover(function(){
				var e = $( this );
				_timeout = setTimeout(function( ){
					e.children( '.poptips' ).fadeIn( 300 );
					},300)},function(){
					$( this ).children( '.poptips' ).fadeOut( 100 );
					clearTimeout( _timeout );
            });
        }
    );
    //sidebar判断当前页面  ！！！要修改！！！
    $( '#'+$( '.train-map' ).attr( 'title' )).addClass( 'active' );
    
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

        $('#submit').click(function(e) {
            e.preventDefault();
            var email = $('#newsletter').val();
            $.ajax({
                url : "http://www.tibetdiscovery.com/forms/newsletter.php?email=" + email + "&&" + Math.random(),
                context : '',
                success : function(data) {
                    if(data == "1") {
                        alert('Thank you for subscribing to our newsletter. The tibetdiscovery Team');
                    } else if(data == "2") {
                        alert('You are already registered to our newsletter. We hope you have enjoyed our previous publications.');
                    } else {
                        alert('The system is busy, please try again later.');
                    }
                },
                error : function() {
                    alert('error')
                }
            });
        });

    //top menu 选择当前页面
    var bread_len = $( '.bread a' ).length;
    if( bread_len > 1 ) {
        var selected = $( '.bread a' ).eq(1).text();
    } else {
        var selected = $( '.bread' ).text().substring( 18 );
    }
    if($( '.homebread' ).length!=0){
        $( '#menus li a' ).eq( 0 ).addClass( 'selected' );
    }
    $( '#menus li a' ).each(function() {
        if( $( this ).attr( 'title' ) == selected ) {
            $( this ).addClass( 'selected' );
        }
    });


});
})( jQuery );
