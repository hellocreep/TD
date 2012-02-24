;(function(){
    //翻页 opts{list:翻页jquery封装集，num:单页显示数量}
    //todo: 上一页和下一页,返回window高度未定
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
                    $( window ).scrollTop( 350 );
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
        }
    }
    
$(function(){

        //酒店列表翻页
        var hotel_list = $('.recommended-hotel .hotel-list');
        var _num = 4;
        pager_opts = {
            list: hotel_list,
            num: _num
        }
        $( '#pager' ).autoPager( pager_opts );
    
});
})(jQuery)
