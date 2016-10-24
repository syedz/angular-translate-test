'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');

gulp.task('js', function(){
  return gulp.src([
    './bower_components/angular/angular.js',
    './bower_components/angular-translate/angular-translate.js',
    './bower_components/angular-translate-handler-log/angular-translate-handler-log.js',
    './bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
    './bower_components/angular-cookies/angular-cookies.js',
    './bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
    './bower_components/angular-translate-storage-local/angular-translate-storage-local.js',

    './js/app.js'])
    .pipe(concat('app.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('sass', function () {
  return gulp.src(['./sass/ltr-app.scss', './sass/rtl-app.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('build', [], function() {
  runSequence('js', 'sass');
});

gulp.task('default', ['build'], function() {});
