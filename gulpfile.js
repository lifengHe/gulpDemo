/*gulp配置文件*/
var gulp = require('gulp'),
    //清除文件
    del = require('del'),
    //监听文件
    watch = require('gulp-watch'),
    //js压缩插件
    uglify = require('gulp-uglify'),
    //合并文件
    concat = require('gulp-concat'),
    //压缩css
    minifyCSS = require('gulp-minify-css'),
    //less转css
		miniLess = require('gulp-less'),
    //压缩图片
    imagemin = require('gulp-imagemin');

//1.清除旧部署的文件
gulp.task('clean', function(cb) {
	del(['build/*']);
	cb();
});

//2.压缩合并脚本文件
gulp.task('uglify', function() {
	gulp.src(['js/*.js'])
	    .pipe(uglify())
	    .pipe(concat('index.js'))
	    .pipe(gulp.dest('build/'));
});

//3.less转css合并css文件
gulp.task('less', function() {
	gulp.src('css/*.less')
			.pipe(miniLess())
		  .pipe(gulp.dest('css/'))
		  .pipe(concat('index.css'))
		  .pipe(minifyCSS())
		  .pipe(gulp.dest('build/'));
});

//4.压缩图片
gulp.task('imagemin', function() {
	gulp.src('image/**/*.{png,jpg,jpeg,gif,webp.svg}')
	    .pipe(imagemin({
	    	progressive: true
	    }))
	    .pipe(gulp.dest('build/image/'));
});

//5.监听less文件变化执行less任务
gulp.task('watchcss', function() {
	gulp.watch('css/*.less', ['less']);
});

//6.监听js文件变化执行uglify任务
gulp.task('watchjs', function() {
	gulp.watch('js/*.js', ['uglify']);
});

//默认任务组合
gulp.task('default', ['clean'], function() {
	gulp.start('uglify', 'less', 'watchcss', 'watchjs', 'imagemin');
});