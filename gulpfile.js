var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');

gulp.task('default', function() {
  gulp.src('src/App.js')
    .pipe(eslint())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
});