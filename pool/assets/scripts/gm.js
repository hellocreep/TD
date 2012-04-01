( function ( $ ){

function gm_initialize( e ) {
    e.preventDefault();
    
    $( '.map_container' ).show();
    
     //当前attration
    var thisAttraction = $( '.hotel_h1Title' ).text()//'St Regis Lhasa Resort';
    
    //attractions 坐标
    var attractions = [
            //拉萨hotels 坐标
            ['St Regis Lhasa Resort',29.64634645549873, 91.14490628242493,'','/assets/images/tibet-hotel/lhasa-hotel/5-star/St-Regis-Lhasa-Resort/hotel-picture/night-view-of-hotel-280.jpg'],
            ['Brahmaputra Grand Hotel', 29.6459058776359, 91.15386486053467,'','/assets/images/tibet-hotel/lhasa-hotel/4-star/Brahmaputra-Grand-Hotel/hotel-picture/facade-280.jpg'],
            ['Four Points by Sheraton Lhasa', 29.643523,91.136159,'','/assets/images/tibet-hotel/lhasa-hotel/5-star/Four-Points-by-Sheraton-Lhasa/hotel-picture/appearance-280.jpg'],
            ['Jardin Secret Hotel', 29.644260104121273, 91.07539683580399,'','/assets/images/tibet-hotel/lhasa-hotel/4-star/jardin-secret-hotel/hotel picture/from-the-outside-280.jpg'],
            ['Xin Ding Hotel', 29.641921940529944, 91.11793667078018,'','/assets/images/tibet-hotel/lhasa-hotel/4-star/Xin-Ding-Hotel/Xinding-hotel/hotel-picture/xin-ding-hotel-facade-280.jpg'],
            ['Lhasa Manasarovar Hotel', 29.645929188682256, 91.1548063158989,'','/assets/images/tibet-hotel/lhasa-hotel/4-star/Lhasa-Manasarovar-Hotel/hotel-picture/appearance-280.jpg'],
            ['Tibet Hotel', 29.656966362698242, 91.09017848968506,'','/assets/images/tibet-hotel/lhasa-hotel/4-star/Tibet-Hotel/hotel-picture/appearance2-280.jpg'],
            ['Yak Hotel',29.65320663343443, 91.13265663385391,'','/assets/images/tibet-hotel/lhasa-hotel/3-star/yak-hotel/hotel-picture/hotel-front-desk-280.jpg'],
            ['Thangka Hotel',29.65003884178747, 91.13028556108475,'','/assets/images/tibet-hotel/lhasa-hotel/3-star/thangka-hotel/hotel/hotel-facade-280.jpg'],
            ['Cang-gyan Lhasa Hotel',29.657579374051608, 91.09351247549057,'','assets/images/tibet-hotel/lhasa-hotel/3-star/gang-gyan-lhasa-hotel/hotel-picture/hotel-appearance-280.jpg'],
            ['Dhood Gu Hotel',29.652423435947714, 91.13320916891098,'','/assets/images/tibet-hotel/lhasa-hotel/3-star/dhood-gu-hotel/hotel/frontdesk-280.jpg'],
            ['Shangbala Hotel',29.651628577505004, 91.1311411857605,'','/assets/images/tibet-hotel/lhasa-hotel/3-star/shangbala-hotel/hotel/hotel-facade-280.jpg'],
            ['Kyichu Hotel',29.652675178661685, 91.13057523965836,'','/assets/images/tibet-hotel/lhasa-hotel/3-star/kyichu-hotel/hotel/exterior-280.jpg'],
            ['New Mandala Hotel', 29.649626252314075, 91.13081395626068,'','/assets/images/tibet-hotel/lhasa-hotel/3-star/new-mandala-hotel/hotel/facade-280.jpg'],
            ['Tashitakge Hotel', 29.649735810135784, 91.1329784989357,'','/assets/images/tibet-hotel/lhasa-hotel/2-star/Tashi-Takge-Hotel/hotel/wall-painting-280.jpg'],
            //日喀则hotels坐标
            ['Jiumu Yamei Hotel', 29.266839774287874, 88.88052105903625,'','/assets/images/tibet-hotel/Shigatse-hotel/Jiumu-Yamei-Hotel/hotel/exterior-110.jpg'],
            ['Zhaxiquta Hotel', 29.27478787243529, 88.879753947258,'','/assets/images/tibet-hotel/Shigatse-hotel/zhaxiquta-hotel/hotel/hotel-front-desk-280.jpg'],
            ['Zanglong Hotel', 29.264588831740124, 88.89420837163925,'','/assets/images/tibet-hotel/Shigatse-hotel/zanglong-hotel/hotel/exterior-280.jpg'],
            ['Taixing Hotel', 29.25761106294176, 88.89226913452148,'','/assets/images/tibet-hotel/Shigatse-hotel/taixing-hotel/hotel/facade-of-Taixing-hotel-280.jpg'],
            ['Shigatse Hotel', 29.260470554949784, 88.88517200946808,'','/assets/images/tibet-hotel/Shigatse-hotel/Shigatse-Hotel/hotel/facde-280.jpg'],
            ['Wutse Grand Hotel', 29.2606109534802, 88.89092266559601,'','/assets/images/tibet-hotel/Shigatse-hotel/wutse-grand-hotel/hotel/facade-280.jpg'],
            //['Shigatse Manasarovar Hotel', 29.270475807563095, 88.89087975025177,''],
            //['Shigatse Shangdong Mansion', 29.26557391768497, 88.88239324092865,''],
            ['Holy Land Hotel', 29.267317098771326, 88.88189435005188,'','/assets/images/tibet-hotel/Shigatse-hotel/holy-land-hotel/hotel/facade-280.jpg'],
            //['Denzin Hotel', 29.271486573763372, 88.87865960597992,''],
            //江孜hotels坐标
            ['Gyantse Hotel',28.908927157641713, 89.6045994758606,'','/assets/images/tibet-hotel/gyantse-hotel/gyantse-hotel/hotel/exterior-110.jpg'],
            ['Gyantse Jianzang Hotel',28.90934040074421, 89.6030706167221,'','/assets/images/tibet-hotel/gyantse-hotel/jianzang-hotel/hotel/hotel-facade-110.jpg'],  
            //定日珠峰hotels坐标
            //['Tingri Baiba Hotel', 28.632928072441434, 87.17458248138428,''],
            ['Everest Hotel', 28.63291394726706, 87.17448860406876,'','/assets/images/tibet-hotel/dingri-hotel/everest-hotel/hotel/lobby-280.jpg'],
            ['Tent Guest House',28.16553641408612, 86.84331893920898,'','/assets/images/tibet-hotel/everest/tent-guest-house/hotel/exterior-280.jpg'],
            ['Rongpuk Guest House',28.191236550662385, 86.82906568050385,''],
            //樟木hotels坐标
            ['Caiyuan Hotel', 27.98593414494189, 85.98454266786575,'','/assets/images/tibet-hotel/zhangmu-hotel/zhangmu-caiyuan-hotel/hotel/facade-110.jpg'],
            ['Zhangmu Hotel', 27.98532305497405, 85.98381847143173,'','/assets/images/tibet-hotel/zhangmu-hotel/hotel/exterior-110.jpg'],
            ['Sharpa Hotel', 27.986583128169777, 85.98305404186249,''],
            //林芝hotels坐标
            ['Nyingchi Hotel', 29.66639420415487, 94.35520201921463,'','/assets/images/tibet-hotel/nyingchi-hotel/nyingchi-hotel/hotel/exterior-110.jpg'],
            ['ChongqingXiaotiane Hotel', 29.654595861601337, 94.35854136943817,'','/assets/images/tibet-hotel/nyingchi-hotel/chongqi-xiaotiane/hotel/exterior-110.jpg'],
            ['Nyingchi Mingren Business Hotel', 29.656434927780456, 94.35976982116699,'','/assets/images/tibet-hotel/nyingchi-hotel/nyingchi-mingren-business-hotel/hotel/exterior-110.jpg'],
            //山南hotels坐标
            ['Tsetang Hotel', 29.23196098171095, 91.77076488733292,'','/assets/images/tibet-hotel/tsetang/tsetang-hotel/hotel/exterior-110.jpg'], 
            ['Yalong River Hotel',29.231450723281643, 91.7643141746521,'','/assets/images/tibet-hotel/tsetang/yalong-river-hotel/hotel/lobby-110.jpg'],
            ['Tibet Yulong Holiday Hotel',29.23177841247336, 91.77262365818024,'','/assets/images/tibet-hotel/tsetang/tibet-yulong-holiday-hotel/hotel/exterior-110.jpg'],
            //火车站坐标
            ['Train Station',29.623105090607822, 91.0705018043518,'imagesnew/hotel/train-station-icon.png',''],
            //飞机场坐标
            ['Airport',29.291220248740697, 90.90149849653244,'imagesnew/hotel/airport-icon.png','']
    ];
    	//跳转的链接
		var links = ['http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/st-regis-lhasa-resort/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/brahmaputra-grand-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/four-points-by-sheraton-lhasa/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/jardin-secret-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/xin-ding-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/lhasa-manasarovar-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/tibet-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/yak-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/thangka-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/the-tibet-cang-gyan-lhasa-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/dhood-gu-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/shangbala-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/kyichu-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/new-mandala-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/lhasa-hotels/tashi-takge-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shigatse-hotels/jiumu-yamei-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shigatse-hotels/zhaxiquta-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shigatse-hotels/zanglong-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shigatse-hotels/taixing-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shigatse-hotels/shigatse-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shigatse-hotels/wutse-grand-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shigatse-hotels/holy-land-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/gyantse-hotels/gyantse-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/gyantse-hotels/gyantse-jianzang-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/tingri-and-ebc/everest-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/tingri-and-ebc/tent-guest-house/',
        			 '',
        			 'http://www.tibetdiscovery.com/tibet-hotels/zhangmu-hotel/caiyuan-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/zhangmu-hotel/zhangmu-hotel1/',
        			 '',
        			 'http://www.tibetdiscovery.com/tibet-hotels/nyingchi-hotels/nyingchi-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/nyingchi-hotels/chongqing-xiaotiane-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/nyingchi-hotels/nyingchi-mingren-business-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shannan-hotel/tsetang-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shannan-hotel/yalong-river-hotel/',
        			 'http://www.tibetdiscovery.com/tibet-hotels/shannan-hotel/tibet-yulong-holiday-hotel/',
        			 '',
        			 ''
        ]
        //当前酒店与其他酒店 
        var redlocal = 'imagesnew/hotel/hotel-icon1.png';
        var greenlocal = 'imagesnew/hotel/hotel-icon2.png';
        var new_latlng1, latlng2;
        //区分当前坐标
        for(var i = 0; i < attractions.length - 2; i++) {
            if(attractions[i][0] == thisAttraction) {
                attractions[i][3] = redlocal;
                new_latlng1 = attractions[i][1];
                new_latlng2 = attractions[i][2];
            } else {
                attractions[i][3] = greenlocal;
            }
        }
        
        var latlng ='';
        var zoomNum = '';
        
        if($('.nav-left li a').hasClass('active')) {
            var hotel_local = $('.nav-left .active').attr('id');
            zoomNum = 8;
            if( hotel_local=='shigatse-hotels'){
                latlng =  new google.maps.LatLng(29.269963112030908, 88.88195615541102);
            }
            if( hotel_local=='lhasa-hotels' ){
                latlng =  new google.maps.LatLng(29.64704578172058, 91.14141401943789);
            }
            if( hotel_local=='gyantse-hotels'){
                laflng = new google.maps.LatLng(28.908927157641713, 89.6045994758606);
            }
            if( hotel_local=='tingri-ebc'){
                laflng = new google.maps.LatLng(28.63291394726706, 87.17448860406876);
            }
            if( hotel_local=='zhangmu-hotels'){
                laflng = new google.maps.LatLng(27.98532305497405, 85.98381847143173);
            }
            if( hotel_local=='shannan-hotels'){
                laflng = new google.maps.LatLng(29.23196098171095, 91.77076488733292);
            }
            if( hotel_local=='nyingchi-hotels'){
                laflng = new google.maps.LatLng(29.66639420415487, 94.35520201921463);
            }
        } else {
            //地图中心位置
            latlng = new google.maps.LatLng(new_latlng1 * 1, new_latlng2 * 1);
            //29.646605206678142, 91.13964915275574
            zoomNum = 16
        }

        var myOptions = {
            zoom : zoomNum,
            center : latlng,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

//显示attractions
        for(var i = 0; i < attractions.length - 2; i++) {
            var beach = attractions[i];
            var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
            var marker = new google.maps.Marker({
                position : myLatLng,
                map : map,
                title : beach[0],
                icon : new google.maps.MarkerImage(beach[3]),
                zIndex : i
            });
            attachSecretMessage(marker, i);
        }

		function attachSecretMessage(marker, number) {
			//消息框
			var infowindow = new google.maps.InfoWindow({
				content : '<dl><dt><a href=' + links[number] + '>' + attractions[number][0] + '</a></dt><dd id="img"><img width="200" height="110" src=' + attractions[number][4] + '></dd>' + '</dl>',
				size : new google.maps.Size(50, 50)
			});
			//marker绑定方法
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}


}

$( function(){
        $( '.map-show' ).click(function( e ){
            e.preventDefault();
            $( '#show_map' ).click();
        })    
        $( '#show_map' ).click( gm_initialize );
        $( '#close_map' ).click( function( e ){
            e.preventDefault();
            $( '.map_container' ).hide();
        });

});
})(jQuery);
