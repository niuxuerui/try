require.config({
    paths: {
        //网络模块
        "flexible": "./libs/flexible",
        "jquery": "./libs/jquery",
        "swiper": "./libs/swiper",
        "bscroll": "./libs/bscroll",
        "handlebars": "./libs/handlebars",
        //自定义功能块
        //页面逻辑块
        "index": "./order/index"
    }
})
require(["flexible", "index"])