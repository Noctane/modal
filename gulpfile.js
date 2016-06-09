var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require("gulp-autoprefixer");
var browserSync = require('browser-sync').create();

//compile sass please
gulp.task('sass', function() {
  return gulp.src('./sass/**/*.{scss,sass}')
    .pipe(sass({
      onError: browserSync.notify
    }))
    .pipe(prefix({
      browser: ['last 15 versions', '> 1%', 'ie 8', 'ie7'],
      cascade: true
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
      }))
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('img', function() {
  return gulp.src('./img/*.*')
  .pipe(gulp.dest('./dist/img/'))
});

gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: './dist'
  });

  gulp.watch('./sass/**/*.{scss,sass}', ['sass']);
  gulp.watch(['dist/*.html', 'dist/css/*.css']).on('change', browserSync.reload);
});

// Creating a default task
gulp.task('default', ['sass', 'watch']);
