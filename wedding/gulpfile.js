'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify-es').default;
var rename = require('gulp-rename');
var gutil = require('gulp-util');

// compile scss to css
gulp.task('sass', function() {
  return gulp
    .src('./sass/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ basename: 'styles.min' }))
    .pipe(gulp.dest('./css'));
});

// watch changes in scss files and run sass task
gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// minify js
gulp.task('minify-js', function() {
  return gulp
    .src('./js/scripts.js')
    .pipe(uglify())
    .pipe(rename({ basename: 'scripts.min' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('scripts', function() {
  return gulp
    .src('js/*.js')
    .pipe(
      uglify().on('error', function(e) {
        console.log(e);
      }))
    .pipe(gulp.dest('minjs'));
});

// default task
gulp.task('default', ['sass', 'minify-js']);

gulp.task('scripts', ['clean'], function () {
      return gulp.src('js/*.js')
        .pipe(uglify().on('error',gutil.log))
        .pipe(gulp.dest('minjs'));
  });