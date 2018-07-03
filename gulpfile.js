var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    cssvars = require('postcss-simple-vars'),
    cssImports = require('postcss-import');

    gulp.task('default',function(){
        console.log('Halil Güler');
    });

    gulp.task('html',function(){
        console.log('HTML5 is Great');
    });


    gulp.task('styles',function(){

        return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImports,cssvars,nested,autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

    });

gulp.task('styles',function(){

    watch('./app/index.html',function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css',function(){
        gulp.start('styles');
    });
});