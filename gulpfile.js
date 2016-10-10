'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
gulp.task('default', ['serve']);

gulp.task('sass', function(){
	return gulp.src('./sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});

