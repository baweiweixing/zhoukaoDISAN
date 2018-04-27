var gulp = require("gulp");
var server = require("gulp-webserver");


gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8090,
            host: "169.254.5.130",
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                next()
            }
        }))
})

gulp.task("watch", function() {
    gulp.watch("server");
})

gulp.task("default", ["server"])