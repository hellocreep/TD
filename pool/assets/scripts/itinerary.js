(function(){
	
	//翻页 opts{list:翻页jquery封装集，num:单页显示数量,scroll: 翻页返回顶部高度}
    //TODO: 上一页和下一页,返回window高度未定
    $.fn.autoPager = function( opts ){
        var pageCount = (opts['list'].length / opts['num']).toFixed(0);
        if( pageCount<2 ){
            return;
        }else{
            
            for( var i = 0; i<pageCount; i++){
                var currentPage = i + 1;
                var beginPage = i*opts['num'];
                $( '#pager' ).append("<span class='btn-page' name="+beginPage+">"+currentPage+"</span>");
            };
            
            var pager = function( begin,end ){
                opts['list'].hide();
                opts['list'].slice( begin, end ).show();
            }
            
            $( '.btn-page' ).each(function(){
                $( this ).click( function(){
                    $( this ).addClass( 'selected' ).siblings().removeClass( 'selected' );
                    if( opts['scroll'] > -1 ){
                    	$( window ).scrollTop( opts['scroll'] );
                    }
                    var begin = $( this ).attr( 'name' )*1;
                    var end = begin + opts['num']*1;
                    pager(begin,end);
                });
            });
            
            $( '#pager .page-pre' ).click(function(){
                $( '#pager .selected' ).prev().click();
            });
            $( '#pager .page-next' ).click(function(){
                $( '#pager .selected' ).next().click();
            });
            
            $( '.btn-page:first' ).click();
            //$( window ).scrollTop( 0 );
        }
    }
	
$(function(){
	
	$( '.accordion p' ).hide();
	$('.accordion h6').click(function() {
		$(this).next().toggle('fast');
	}); 
	
	var faq_list = $( '.accordion li' );
	var _num = 6;
	
	pager_opts = {
            list: faq_list,
            num: _num,
            scroll: -100
        }
	$( '#pager' ).autoPager( pager_opts );
	
})
})(jQuery);
