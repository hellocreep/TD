(function(){
    
$( function(){
    
    //contact us 弹出框
    $( '#contact-us' ).click( function(){
       $( '.tiny-form' ).toggle( 'slow' ); 
    });
    //contact us 表单验证
    $( '#tiny-form' ).validate();  
    
    //sidebar弹出框
    $( '.nav-left-faqs' ).each(
        function(){
            $( this ).hover( function(){
                $( this ).children( '.poptips' ).fadeIn( 100 );
            },function(){
                $( this ).children( '.poptips' ).fadeOut( 100 );
            })
        }
    );
    
	//sidebar同步content 有没其他可以不写js的方法实现？
	$( '.sidebar' ).height($( '.content' ).height());
	
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
