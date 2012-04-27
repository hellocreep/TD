;(function() {
	//sidebar同步content 有没其他可以不写js的方法实现？
	var syncHeight = function() {
		var content_height = $('.content').height();
		var sidebar_height = $('.sidebar').height();
		if(sidebar_height > content_height) {
			return;
		} else {
			$('.sidebar').height($('.content').height() + 60);
		}
	}

	$.fn.autoHeight = function() {
		var sidebar_height = $('.sidebar').height();
		var content_height = $('.content').height();
		if(content_height < sidebar_height) {
			return;
		} else {
			$('.sidebar').height($('.content').height() + 60);
		}
	}
	//去除字段最后的逗号
	$.fn.removeComma = function(target) {

		$(this).each(function() {
			var model = $(this).html();
			var len = model.lastIndexOf(',')
			$(this).html(model.substring(0, len))
		})
	}
	$(function() {

		//顶部导航
		$( '.nav-new li' ).each(function(){
			$( this ).hover(function(){
				if( !$(this).hasClass('current')){
					$( this ).addClass( 'hover' ).children( 'a' ).addClass( 'hover' );
				}
				if( $(this).hasClass('muti-li') ){
					$(this).children('a').css({
					"z-index" : "60"
					}).addClass('hover');
					$(this).children('.dropdown').show();
					}
				if( $(this).hasClass('last') ){
					$(this).children('.sidenav').slideDown();
				}
			},function(){
				$( this ).removeClass( 'hover' ).children( 'a' ).removeClass( 'hover' );
				if( $(this).hasClass('muti-li') ){
					$(this).children('.dropdown').hide();
					$(this).children('a').css({
					"z-index" : "40"
					}).removeClass('hover');
				}
				if( $(this).hasClass('last') ){
					$(this).children('.sidenav').hide();
				}

			});
		});
		//左导航同content高度	
		$(window).bind('scroll', syncHeight)
		
		//top menu 选择当前页面
		var bread_len = $('.bread a').length;
		if( bread_len == 0 ){
			$( '.home' ).addClass( 'current' )
		}	
		if(bread_len > 1) {
			var selected = $('.bread a').eq(1).text();
		} else {
			var selected = $('.bread').text().substring(18);
		}
		if($('.bread').length == 0) {
			$('.nav-new li a').eq(0).addClass('current')
			$( '.nav-new li' ).eq(0).addClass('current');
		}
		$('.nav-new li a').each(function() {
			if($(this).attr('title') == selected) {
				$(this).addClass('current').parent().addClass('current');
			}
		});
		
		//contact us 弹出框
		$('#call-you').click(function() {
			$('.tiny-form').slideToggle('slow');
		});
		//contact us 表单验证
		$('#callbackform').validate();
		$('.close-tinyform').css('cursor', 'pointer').click(function() {
			$('.tiny-form').hide();
		});
		//sidebar弹出框
		$('.have-arrow li').each(function() {
			var _timeout;
			$(this).hover(function() {
				var e = $(this);
				_timeout = setTimeout(function() {
					e.children('.poptips').fadeIn(300);
				}, 300)
			}, function() {
				$(this).children('.poptips').fadeOut(100);
				clearTimeout(_timeout);
			});
		});
		//sidebar判断当前页面
		$('#' + $('.content').attr('name')).addClass('active');

		//train-info tag标签去逗号
		$('.tag').removeComma();
		//酒店主页与内页surroundings 去逗号
		$('.surrounding-name').removeComma();

		//departures 侧边栏       grouptour发团日期的侧边栏
		var arr = new Array();
		arr[1] = "Jan.";
		arr[2] = "Feb.";
		arr[3] = "Mar.";
		arr[4] = "Apr.";
		arr[5] = "May.";
		arr[6] = "June";
		arr[7] = "July";
		arr[8] = "Aug.";
		arr[9] = "Sept";
		arr[10] = "Oct.";
		arr[11] = "Nov.";
		arr[12] = "Dec.";
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var d = '';
		for(var i = 1; i <= 12; i++) {
			if(i < month) {
				d += '<div class="departure-month"><a class="old"><span class="month">' + arr[i] + '</span><span class="year">2012</span></a></div>';
			} else {
				d += '<div class="departure-month"><a href="http://www.tibetdiscovery.com/join-in-tours/grouptour-departures/?year=' + year + '&&month=' + i + '&&' + Math.random() + '"><span class="month">' + arr[i] + '</span><span class="year">2012</span></a></div>';
			}
		}
		$('#departures-monthly').html(d);

		//wish list fancybox
		try {
			$(' #mywishlist').fancybox({
				'width' : '50%',
				'scrolling' : 'auto',
				'height' : '75%',
				'transitionIn' : 'none',
				'transitionOut' : 'none',
				'type' : 'iframe'
				//'onClosed':function(){}
			});

			if($.cookie('user') != null) {
				var tourlist = $.cookie('user').split(',')
				$('#mywishlist').css('visibility', 'visible').text('My wish list (' + tourlist.length + ')');
			}
		} catch(e) {

		};
	});
})(jQuery);
