let gulp = require('gulp')
let postcss = require('gulp-postcss')
let cssnext = require('postcss-cssnext')
let mixins = require("postcss-mixins");
let lost = require('lost')
let aimport = require ('postcss-import')
let csswring = require("csswring")
let mqpacker = require("css-mqpacker");
let browserSync = require('browser-sync')

gulp.task('serve', ()=>{
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
})

// Tarea para procesar el CSS
gulp.task('css', function () {
  var processors = [aimport(), mixins(), cssnested, lost(),  cssnext(
      { browsers: ["> 5%", "ie 8"] }
    ), mqpacker(), csswring()];

  return gulp.src('./src/app.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./src/**/*.css', ['css'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])
