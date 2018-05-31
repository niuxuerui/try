var gulp = require("gulp");

var sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    mincss = require("gulp-clean-css"),
    server = require("gulp-webserver"),
    rev = require("gulp-rev"),
    collector = require("gulp-rev-collector");


gulp.task("css", function() {
    gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(mincss())
        .pipe(gulp.dest("./src/css"))
});

gulp.task("server", ["css"], function() {
    gulp.src("./src")
        .pipe(server({
            port: 5858
        }))
});
gulp.task("watch", function() {
    gulp.watch("./src/scss/*.scss", ["css"])
});
gulp.task("default", ["server", "watch"]);

//添加到bulid
//html的MD5证书