;(function(){
    //sidebar同步content 有没其他可以不写js的方法实现？ 
   var syncHeight = function(){
       var content_height = $( '.content' ).height();
       var sidebar_height = $( '.sidebar' ).height();
       if( sidebar_height > content_height ){
           return;
       }
       else{
           $( '.sidebar' ).height($( '.content' ).height() + 60);
       }
   }
   
   $.fn.autoHeight = function(){
       var sidebar_height = $( '.sidebar' ).height();
       var content_height = $( '.content' ).height();
       if( content_height <sidebar_height ){
           return;
       }else{
           $( '.sidebar' ).height($( '.content' ).height() + 60);
       }
   }
   //去除字段最后的逗号
   $.fn.removeComma = function( target ){

        $( this ).each(function() {
            var model = $( this ).html();
            var len = model.lastIndexOf( ',' )
            $( this ).html( model.substring( 0, len ))
        })
   }
   
    
$( function(){

    $( window ).bind( 'scroll',syncHeight)

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
    //sidebar判断当前页面 
    $( '#'+$( '.content' ).attr( 'name' )).addClass( 'active' );
    
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
    
    //train-info tag标签去逗号
    $( '.tag' ).removeComma();
    //酒店主页与内页surroundings 去逗号
    $( '.surrounding-name' ).removeComma();
    

    
    
    
    //departures 侧边栏       grouptour发团日期的侧边栏
    var arr=new Array();
	arr[1]="Jan.";
	arr[2]="Feb.";
	arr[3]="Mar.";
	arr[4]="Apr.";
	arr[5]="May.";
	arr[6]="June";
	arr[7]="July";
	arr[8]="Aug.";
	arr[9]="Sept";
	arr[10]="Oct.";
	arr[11]="Nov.";
	arr[12]="Dec.";
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var d='';
	for(var i=1;i<=12;i++)
	{
		if(i<month)
		{
			d+='<div class="departure-month"><a class="old"><span class="month">'+arr[i]+'</span><span class="year">2012</span></a></div>';
		}
		else
		{
			d+='<div class="departure-month"><a href="http://www.tibetdiscovery.com/join-in-tours/grouptour-departures/?year='+year+'&&month='+i+'&&'+Math.random()+'"><span class="month">'+arr[i]+'</span><span class="year">2012</span></a></div>';
		}
	}
	$('#departures-monthly').html(d);
	
	
	
	
	
});
})( jQuery );



