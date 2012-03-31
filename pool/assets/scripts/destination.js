//OVERVIEW头部选项卡切换
$(document).ready(function() {
	$('.thumbs .thumb').each(function(index) {
		$(this).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			$('.slide').hide();
			$('.slide').eq(index).fadeIn();
		})
	})

	$('.thumbs .thumb').eq(0).click();
})
//WHEN TO GO条形图
var January = new Array("","","");
var Febrary = new Array("","","");
var March = new Array("","","");
var April = new Array("","","");
var May = new Array("","","");
var June = new Array("","","");
var July = new Array("","","");
var August = new Array("","","");
var September = new Array("","","");
var October = new Array("","","");
var Novemeber = new Array("","","");
var December = new Array("","","");
var Recommend = new Array("1", "2", "3", "4", "5", "5", "4", "3", "3", "2", "1", "1");
$(document).ready(function() {
	var Allmonth = new Array(January, Febrary, March, April, May, June, July, August, September, October, Novemeber, December);
	$.each(Recommend, function(x,y){
		$('.temp tr').eq(x).children('td:eq(1)').addClass('ww-r'+y);
		$('.WWtable tr:odd td').eq(x).addClass('ww-r'+y);
	});
	
	$.each(Allmonth, function(m, n) {
		$.each(n, function(i, j) {
			$('.temp tr').eq(m).children('td').eq(i + 2).children('span').after(j);
			if(j <= 0) {
				$('.temp tr').eq(m).children('td').eq(i + 2).children('span').css({
					"background" : 'url("/imagesnew/destination/temperature-minus.png") repeat-x'
				}).animate({
					"width" : Math.abs(j)*3
				}, 1000);
			} else {
				$('.temp tr').eq(m).children('td').eq(i + 2).children('span').animate({
					"width" : j*3
				}, 1000);
			}
		})
	})
});


//thingstodo加排序序号
$(document).ready(function(){
	$('.pop-place dt div').each(function(index){
        $(this).text(index+1);
    })	
});

//列表框点击跳转
$(document).ready(function(){
	$('dl.pop-tour').click(function(){
		var lo= $(this).children('a').attr('class');
		alert(lo);
	});
});


