require(["jquery", "swiper", "bscroll", "handlebars", "render", "text!index-ct1"], function($, swiper, bscroll, hand, render, indexCt1) {

    $("body").append(indexCt1);
    //渲染页面
    $.ajax({
        url: "/show?id=0",
        dataType: "json",
        data: {},
        success: function(data) {
            console.log("get");
            console.log(data);
            render(data, $("#index-ct1"), $(".scroll"));
        }
    });
    //登录
    $.ajax({
        url: "/close",
        dataType: "json",
        type: "post",
        data: {
            "z": "我是主页的post请求",
            "n": "cccc"
        },
        success: function(data) {
            console.log("post");
            console.log(data);
        }
    });
});