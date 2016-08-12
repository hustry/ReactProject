

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){

    browserify('./src/MovieFind/js/index.js')
        .transform('reactify')
        .bundle()
        .pipe(source('MovieFind_bundle.js'))
        .pipe(gulp.dest('./build'))

});

gulp.task('copy',function(){

    gulp.src('src/MovieFind/index.html')
        .pipe(gulp.dest('./build/MovieFind'));

    gulp.src('src/MovieFind/css/*')
        .pipe(gulp.dest('./build/MovieFind/css'));


});

gulp.task('default',['browserify','copy'],function(){

    return gulp.watch('src/**/*.*',['browserify','copy']);

});

