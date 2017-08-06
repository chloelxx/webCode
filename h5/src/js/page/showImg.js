/**
 * Created by chloe on 2017/7/4.
 */
/*console.log=function(){}*/
require("../../css/main.css");
import jQuery from 'jquery'

/*这段代码是固定的，必须要放到js中*/
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

function jugePhoneType() {
    var ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) {
        return 1
    } else if (/iphone|ipad|ipod/.test(ua)) {
        return 2
    } else {
        return -1
    }
}

function configIP() {
    var url = window.location.host;
    if (url == "sz1-test-sep-static.oss-cn-shenzhen.aliyuncs.com") {
        return "http://lb1qa1sep.blemobi.com:80";
    } else if (url === 'cdn-static.bb-app.cn') {
        return "http://sep.miwutech.com";
    } else if (url === 'hz1-prod-sep-static.oss-cn-hangzhou.aliyuncs.com') {
        return "http://sep.miwutech.com";
    } else if (url == "192.168.7.207:82") {
        return "http://192.168.5.105";
    } else {
        return "http://sep.miwutech.com"
    }
}

(function() {
    var img = new Vue({
        el: "#showImg",
        data: {
            imageList: [],
            curImgIndex: 0,
        },
        mounted: function() {
            var that = this,
                obj;
            if (jugePhoneType() == 1) {
                var jsStr = blemobi.getImageData();
                obj = JSON.parse(jsStr);
                var images = JSON.parse(obj.images);
                that.newSwiper(images, obj.index);
            } else if (jugePhoneType() == 2) {
                setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler('getImageData', {}, function(response) {
                        var images = JSON.parse(response.images);
                        that.newSwiper(images, response.index)
                    })
                })
            } else {
                var i = '<img src="../img/1.png">'
                var images = [{ "src": "dist/img/1.png" }, { "src": "dist/img/2.png" }, { "src": "dist/img/33.png" }, { "src": "dist/img/4.png" }, { "src": "dist/img/6.png" }, { "src": "http://sz1-test-sep-persistence.oss-cn-shenzhen.aliyuncs.com/57aad52684b612a31500445360089.jpg" }]
                that.newSwiper(images, 1);
            }
            console.log("imageList==", that.imageList, that.curImgIndex);
            $("#showImg").click(function() {
                if (jugePhoneType() == 1) {
                    blemobi.hidePic();
                } else {
                    setupWebViewJavascriptBridge(function(bridge) {
                        bridge.callHandler('hidePic', function(response) {})
                    })
                }
            })
        },
        methods: {
            newSwiper: function(images, index) {
                var that = this;
                that.imageList = images;
                console.log("images==", JSON.stringify(images));
                that.curImgIndex = index;
                Vue.nextTick(function() {
                    var swiper = new Swiper('.swiper-container', {
                        paginationClickable: true,
                        // Disable preloading of all images
                        preloadImages: false,
                        // Enable lazy loading
                        lazyLoading: true,
                        initialSlide: that.curImgIndex,
                    })
                })
            },
            downloadImg: function(src, e) {
                e.stopPropagation();
                if (jugePhoneType() == 1) {
                    blemobi.downloadPic(src);
                } else {
                    setupWebViewJavascriptBridge(function(bridge) {
                        bridge.callHandler('downloadPic', src, function(response) {})
                    })
                }
            },
        }
    })
})()