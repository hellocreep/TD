;(function(){
    //sidebar高度同步content 
    var auto_height = function() {
        var sidebar_height = $('.sidebar').height($('.content').height() + 60);
        if($('.sidebar').height() < 950) {
            $('.sidebar').height(1000);
        }
    }

$( function(){
    
    auto_height();
    
    //contact us 弹出框
    $( '#call-you' ).click( function(){
       $( '.tiny-form' ).toggle( 'slow' ); 
    });
    //contact us 表单验证
    $( '#tiny-form' ).validate();  
    
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
    })

});

})( jQuery );


//头部导航下拉列表效果
