var gulp = require("gulp");
var server = require("gulp-webserver"),
    sass = require("gulp-sass"),
    mincss = require("gulp-clean-css"),
    uglify = require("gulp-uglify"),
    clean = require("gulp-clean");

var urltool = require("url");

var mock = require("./data/mock.js");

var ql = require("querystring");


gulp.task("mincss", function() {
    gulp.src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
});


gulp.task("watch", function() {
    gulp.watch('./src/scss/**/*.scss', ['mincss'])
});


gulp.task("server", ['mincss'], function() {
    gulp.src("./src")
        .pipe(server({
            port: 5858,
            middleware: function(req, res, next) {
                if (req.method == "GET") { //get
                    var getObj = urltool.parse(req.url, true);
                    var url = getObj.path;
                    if (/\/show/g.test(url)) {
                        console.log(getObj)
                        var data = mock(url);
                        res.setHeader("content-type", "text/json;charset=utf-8");
                        res.end(JSON.stringify(data));
                    }
                } else { //post
                    var arr = [];
                    req.on("data", function(d) {
                        arr.push(d);
                    });
                    req.on("end", function() {
                        console.log(arr);
                        var a = ql.parse(Buffer.concat(arr).toString());
                        console.log(a.z);

                        //点击开始阅读     走向两个接口
                        //判断是 已经登录的直接访问文章 
                        // 没登录的访问登录页  


                        var postObj = urltool.parse(req.url, true);

                        if (postObj.pathname == "/close") {
                            res.setHeader("content-type", "text/json;charset=utf-8");
                            res.end(JSON.stringify(a));
                        }
                        if (postObj.pathname == "/re") {
                            res.end(JSON.stringify(a));
                        }

                        next();

                    });


                    return false; //防止报错
                }
                next();
            }
        }))
});

gulp.task("default", ["server", "watch"]);