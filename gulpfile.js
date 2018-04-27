var gulp = require("gulp");
var server = require("gulp-webserver");
var sass = require("gulp-sass");
var minCss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var datalist = require("src/data/ls.json")

gulp.task("minCss", function() {
    gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(minCss())
        .pipe(gulp.dest("src/css"))
})




gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8090,
            host: "169.254.5.130",
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === "/datalist") {
                    res.end(JSON.stringify(datalist))
                }
                next()
            }
        }))
})

gulp.task("copyCss", function() {
    gulp.src("src/scss/*.css")
        .pipe(gulp.dest("src/css"))
})

gulp.task("watch", function() {
    gulp.watch("server");
})

gulp.task("default", ["server", "minCss"])