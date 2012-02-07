(function(){
    
$( function(){
    
    //sidebar弹出框
    $( '.nav-left-faqs' ).each(
        function(){
            $( this ).hover( function(){
                $( this ).children( '.poptips' ).fadeIn( 'fast' );
            },function(){
                $( this ).children( '.poptips' ).fadeOut( 'fast' );
            })
        }
    );
	//sidebar同步content 有没其他可以不写js的方法实现？
	$( '.sidebar' ).height($( '.content' ).height());
	
	//头部menu下拉效果
	$('div#tibetTours').hide();
    
    $('div#travelStyle').hide();
    
    $('ul#menus>li:eq(1)').hover(function(){
        $('div#tibetTours').show();
    },function(){
        $('div#tibetTours').hide();
    })
    
    $('ul#menus>li:eq(2)').hover(function(){
        $('div#travelStyle').show();
    },function(){
        $('div#travelStyle').hide();
    })


});
})( jQuery );
