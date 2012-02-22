;(function(){
        
    $.fn.hotelPager = function( opts ){
        for( var i = 0; i<opts['pageCount']; i++){
            var currentPage = i + 1;
            var beginPage = i*opts['num'];
            $( '#pager' ).append("<span class='btn-page' name="+beginPage+">"+currentPage+"</span>")
        };
        
        var pager = function( begin,end ){
            opts['hotel_list'].hide();
            opts['hotel_list'].slice( begin, end ).show();
        }
        
        $( '.btn-page' ).each(function(){
            $( this ).click( function(){
                $( this ).addClass( 'selected' ).siblings().removeClass( 'selected' );
                var begin = $( this ).attr( 'name' )*1;
                var end = begin + opts['num']*1;
                pager(begin,end);
            });
        });
        $( '.page-pre' ).click(function(){
            $( '#pager .selected' ).prev().click();
        });
        $( 'page-next' ).click(function(){
            $( '#pager .selected' ).next().click();
        })
        
    }
    
$(function(){
   
        //酒店评分排序
        $(".default-span").click(function() {
            $(".rate-toggle").hide();
            $("#default-rate").show();
        });
        $("#starrating").click(function() {
            $(".rate-toggle").hide();
            $("#star-rate").show();
        });
        $("#guestrating").click(function() {
            $(".rate-toggle").hide();
            $("#guest-rate").show();
        });

        //酒店列表翻页
        var hotel_list = $('.recommended-hotel .hotel-list');
        var sum = hotel_list.length;
        var _num = 4;
        var page = sum / _num;
        page = page.toFixed(0)
        
        pager_opts = {
            hotel_list: hotel_list,
            pageCount: page,
            num: _num
        }
        
        $( '#pager' ).hotelPager( pager_opts );
        
        var begin = 0, end = begin + _num;
        hotel_list.hide();
        hotel_list.slice(begin, end).show();


    
});
})(jQuery)
