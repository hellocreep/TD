( function(){
    //车站资料
    var trainStation = [
    ['icon-beijing','Beijing West Railway Station','<img class="attraction-pic" src="images/train/beijing-west-railway-station210.jpg" />'+
    'No.118, East Lianhuachi Road,</br>Fengtai District, Beijing 北京市丰台区莲花池东路118号',
    '<h3>How to get there?</h3><p><strong>By taxi:</strong>the cost from Beijing downtown to the railway station is normally around 40 RMB.</p>'+
    '<p><strong>subway:</strong>currently served by Line 9 from Guogongzhuang Station to Beijing West Railway Station.</p>'+
    '<p><strong>By bus:</strong>a great number of routes to the station’s North Square.</p>','Train to Lhasa from Beijing'
    ],
    ['icon-lhasa','Lhasa Railway Station','<img class="attraction-pic" src="images/trian/lhasa-railway-station-210.jpg" />'+
    'The brand-new modern railway station is located 20km southwest of Lhasa downtown.',
    '<h3>Nearby Attractions in Lhasa city:</h3>'+
    '<p><strong>Potala Palace:</strong>the symbol of the city, the Heavenly Palace of the Dalais</p>'+
    '<p><strong>Jokhang Temple:</strong> the house of the Buddha and the holiest destination for all Tibetan pilgrims.</p>'+
    '<p><strong>Barkhor Street:</strong>A typical Tibet bazaar for you to explore the real life of the locals.</p>','1'
    ],
    ['icon-chengdu','Chengdu Railway Station','<img class="attraction-pic" src="images/trian/chengdu-railway-station-210.jpg" />'+
    'Gong Jiao Lu, Jin Niu Qu, Chengdu, Sichuan 成都市金牛区二环路北三段',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Tianfu Square to the railway station is normally no less than 15 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 </p>','Train to Lhasa from Chengdu'
    ],
    ['icon-chongqing','Chongqing Railway Station','<img class="attraction-pic" src="images/trian/" />'+
    'Caiyuanba Motorway Interchange,Yuzhong, Chongqing 渝中区菜袁路6号',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Chaotianmen to the railway station is normally no less than 15 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 </p>','Train to Lhasa from Chongqing'
    ],
    ['icon-shanghai','Shanghai Railway Station','<img class="attraction-pic" src="images/trian/shanghai-railway-station-210.jpg" />'+
    'Moling Road, Zhabei District Shanghai 上海市闸北区秣陵路303号',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from the Bund to the railway station is normally around 25 RMB.</p>'+
    '<p><strong>By subway:</strong>scurrently served by Line 1, 3 and 4 </p>','Train to Lhasa from Shanghai'
    ],
    ['icon-guangzhou','Guangzhou Railway Station','<img class="attraction-pic" src="images/trian/" />'+
    '159 Huanshi Xilu, Yuexiu District, Guangzhou 广州市环市西路159号 ',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Baiyunshan Airport to the railway station is normally around 80 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 and 2.  </p>','Train to Lhasa from Guangzhou'
    ],
    ['icon-lanzhou','Lanzhou Railway Station','<img class="attraction-pic" src="images/trian/lanzhou-railway-station-210.jpg" />'+
    'Huochezhan West Road, Chengguan, Lanzhou, 兰州市火车站东路393号',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Baiyunshan Airport to the railway station is normally around 80 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 and 2. </p>','1'
    ],
    ['icon-xian','Xian Railway Station','<img class="attraction-pic" src="images/trian/xian-station-210.jpg" />'+
    'ff',
    '<h3>How to get there?</h3>'+
    '<p><strong>By taxi:</strong>the cost from Baiyunshan Airport to the railway station is normally around 80 RMB.</p>'+
    '<p><strong>By subway:</strong>served by Line 1 and 2.  </p>','1'
    ],
    ['icon-xining','Xining Station ','<img class="attraction-pic" src="images/trian/xining-railway-station210.jpg" />'+
    'The starting point of Qinghai-Tibet Railway',
    '<h3>Altitude: 2014m</h3>'+
    '<p>All trains heading to Lhasa from all around the country stop over at Xining railway station and it takes 24 hours or so from Xining to Lhasa.</p>'+ 
    '<p>All trains depart in the afternoon. Xining Station is an important railway hub.</p>','1'
    ],
    ['icon-naqu','Nagqu Station','<img class="attraction-pic" src="images/trian/nagqu-station-210.jpg" />'+
    'Agood spot to view the endless fertile Changtang Prairie',
    '<h3>Altitude: 4513m</h3>'+
    '<p>Nagqu Station is a good spot to view the endless fertile Changtang Prairie. </p>'+
    '<p>This vast highland offers visitors blue sky, white clouds, crystal lakes, flocks</p>'+
    '<p>of sheep, yak, vast green grassland and snow-capped mountains. The annual Horse-racing festival of Nagqu</p>'+ 
    '<p>region is held in August here on this grassland. Visitors can get a taste of the Tibetan customs and culture.</p>','1'
    ],
    ];
    
    //车站信息的lightbox
    var show = function( e ){
        var attraction = $( this ).attr( 'name' );
        if( attraction==undefined ){
            attraction = 'icon' + $( this ).attr( 'class' ).replace(/marker/g,'').replace(' ','');
        }
        for( var i =0; i<trainStation.length; i++){
            if( trainStation[i][0]==attraction ){
                $( '.attraction-title' ).text( trainStation[i][1] );
                $( '.attraction-des' ).html( trainStation[i][2] );
                $( '.attraction-faq' ).html( trainStation[i][3] );
                $( '.lightbox' ).fadeIn( 'slow' );
            }
        }
        $( '.mask' ).show().click( function(){
            $( this ).hide();
            $( '.lightbox' ).fadeOut();
        });
    };
    
    //地图图标效果
    var turnon = function( e ){
        var attraction = 'icon' + $( this ).attr( "class" )
        .replace(/marker/g,'').replace(' ',"");
        $( '.'+attraction ).addClass( attraction + '-active' );
    };
    
    var turnoff = function( e ){
        var attraction = 'icon' + $( this ).attr( "class" )
        .replace(/marker/g,'').replace(' ',"");
        $( '.'+attraction ).removeClass( attraction + '-active' );
    };
    
    //隐藏火车站图标

        var hideStation = function(e) {

            var route = $('.content h1:eq(0)').text();

            for(var i = 0; i < trainStation.length; i++) {
                if(trainStation[i][4] != route && trainStation[i][4] != '1') {
                    $('.' + trainStation[i][0]).hide()
                    $('.' + trainStation[i][0].replace('icon', 'marker')).hide();
                }
                if( route =='Train to Lhasa from Beijing' || route=='Train to Lhasa from Chengdu' ){
                $( '.marker-xian' ).hide();
                $( '.icon-xian' ).hide();
            }

            }
        }

$(function(){
    hideStation();
    
    //地图    
    $( '.marker' ).click( show );
    $( '.attraction-icons' ).click( show );
    $( '.marker' ).hover( turnon ,turnoff );
    $( '.lightbox-close' ).click( function(){
        $( '.mask' ).click();
    })
    $( '.attraction-icons' ).hover( function(){
        var className = $( this ).attr( 'name' );
        $( this ).addClass( className+'-active' );
    }, function(){
        var className = $( this ).attr( 'name' );
        $( this ).removeClass( className+'-active' );
    });


    //火车时刻标弹出框
    $( '.icon-train' ).click( function(){
        $( '.schedule-detail.'+$( this ).attr( 'name' ) ).toggle( );
    });

    //火车首页TAB切换
    $( '.station-list li' ).each( function(){
        $( this ).mouseover( function(){
            $( '.station-info' ).hide();
            $( '.station-info[id='+$(this).text()+']' ).show(); 
        });
    });
    $( '.station-list li:first-child' ).mouseover();

});
})( jQuery )
