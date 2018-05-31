require(["jquery", "swiper", "bscroll", "handlebars"], function($, swiper, bscroll, hand) {
    console.log(6666);
    init();

    function init() {
        console.log(location.search);
        $.ajax({
            url: "/re",
            dataType: "json",
            type: "post",
            data: {
                "z": "我是详情页的post请求",
                "n": "cccc"
            },
            success: function(data) {
                console.log("post");
                console.log(data);
            }
        });
    }
});