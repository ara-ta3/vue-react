var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var conf    = require("./webpack.config.js");

gulp.task('webpack', function(){
    gulp.src(["./public_html/**/*jsx.js"])
        .pipe(webpack(conf))
        .pipe(gulp.dest(conf.output.path))
        ;
});

gulp.task('watch', function(){
    gulp.watch('./public_html/**/*jsx.js', ['webpack']);
});

gulp.task('default', ['webpack']);

