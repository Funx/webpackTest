var gulp = require('gulp')

var postcss = require('gulp-postcss')
var lost = require('lost')

var cssFiles = [
  '**/*.css',
  '!./dist',
]

gulp.task('styles', () => {
  gulp.src(cssFiles)
    .pipe(postcss([
      lost
    ]))
    .pipe(gulp.dest('dist/'))
})
gulp.task('default', () => {
  gulp.watch(cssFiles, ['styles'])
})
// gulp.task('watch', () => {
// })
