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
    function request(url, fn) {
        $.ajax({

            url: url,
            method: "GET",
            contentType: "application/json",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("If-Modified-Since", "0");
            },
            error: function() {
                Tips("网络出错,请稍后重试");
            },
            success: function(data) {
                if (typeof fn == "function") {
                    fn(data)
                }
            }
        })
    }

    function setImgWidht() {
        var w = $(".oneImg").css("width");
        var h = 0.5625 * parseInt(w);
        $(".oneImg").css("height", h + "px");

        var w1 = $(".twoImg").css("width");
        $(".twoImg").css("height", w1);

        var w2 = $(".thumbnailHidden").css("width");
        $(".thumbnailHidden").css("height", w2);
    }

    function parseAppURL(url, that) {
        var arr = url.split("&bodyurl=");
        var UUID = arr[0].split("?");
        var postid = arr[0].split(/&|=/);
        var obj = {
            htmlurl: arr[1],
            comment: UUID[1],
            postid: postid[3],
            uuid: postid[1]
        }
        that.comment = UUID[1];
        return obj;
    }

    function setPosition() {
        //全部评论和热门评论显示在顶部
        var hTop = $(" #commentBarHot").offset().top;
        var aTop = $("#commentBarAll").offset().top;
        $(window).scroll(function() {
            var h = $("#all").css("height");
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var viewportSize = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var x = scrollTop + viewportSize - hTop - $(window).height() - 50;
            var y = scrollTop + viewportSize - aTop - $(window).height() - 50;
            if (x >= 0) {
                $("#commentBarHot").css("position", "fixed").css("top", "0").css("left", 0).css("right", 0);
                $("#commentBarAll").css("position", "relative");
            } else {
                $("#commentBarHot").css("position", "relative");
            }
            if (y >= 0) {
                $("#commentBarAll").css("position", "fixed").css("top", "0").css("left", 0).css("right", 0);
                $("#commentBarHot").css("position", "relative");
            } else {
                $("#commentBarAll").css("position", "relative");
            }
        })
    }
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