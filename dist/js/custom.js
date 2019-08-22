/* Theme Name:iDea - Clean & Powerful Bootstrap Theme
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.0.0
 * Created:October 2014
 * License URI:http://wrapbootstrap.com
 * File Description: Place here your custom scripts
 */
function googleTranslateElementInit(){
    new google.translate.TranslateElement({pageLanguage: 'zh-CN', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,multilanguagePage: true, gaTrack: true, gaId: 'UA-98114394-1'}, 'google_translate_element');
};
function init() {
    var map = new BMap.Map("map");            // 创建Map实例
    // 23.2543310000,113.0110250000
    var point = new BMap.Point(113.0110250000,23.2543310000); // 创建点坐标
    map.centerAndZoom(point,10);                 
    // map.enableScrollWheelZoom();                 //启用滚轮放大缩小
    var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
    var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});
    var overView = new BMap.OverviewMapControl();
    var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
    map.addControl(mapType1);          //2D图，卫星图
    map.addControl(mapType2);          //左上角，默认地图控件
    map.setCurrentCity("三水");        //由于有3D图，需要设置城市哦
    map.addControl(overView);          //添加默认缩略地图控件
    map.addControl(overViewOpen);      //右下角，打开
    var myIcon = new BMap.Icon("dist/images/loc.png", new BMap.Size(144,80));
    var marker = new BMap.Marker(point, {icon: myIcon});  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    // 添加带有定位的导航控件
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_BOTTOM_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        // enableGeolocation: true
    });
    map.addControl(navigationControl);
}  
var _hmt = _hmt || []; 
(function() { 
var hm = document.createElement("script"); 
hm.src = "//hm.baidu.com/hm.js?dab56d904f5a6c6150d0f824d7c5431d"; 
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s); 
})(); 