const gulp = require('gulp');
const $ = require('gulp-load-plugins')();



// gulp.task('pug', () => {
//   return gulp.src('./src/**/*.pug')
//     .pipe($.plumber())
//     .pipe($.pug({
//       pretty: true
//     }))
//     .pipe(gulp.dest('./public'));
// });



gulp.task('sass', () => {
  const autoprefixer = require('autoprefixer');
  const plugins = [
    autoprefixer({
      browsers: ['last 1 version', 'not dead', '> 0.2%', 'ie 11']
    })
  ];

  return gulp.src('./src/scss/**/*.scss')
    .pipe($.plumber())
    /* gulp-sourcemaps: 標示壓縮、合併檔案的程式碼的原始位置
     ** https://www.npmjs.com/package/gulp-sourcemaps
     */
    // .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    // CSS 編譯完成
    .pipe($.postcss(plugins))
    // .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});



gulp.task('babel', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe($.plumber())
    // .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['@babel/env']
    }))
    /* gulp-concat: 將 js 檔案合併成同一支，減少 request 次數，增加效能
     ** https://www.npmjs.com/package/gulp-concat
     */
    // .pipe($.concat('all.js'))
    // .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
});



gulp.task('watch', () => {
  // gulp.watch('./src/**/*.pug', ['pug']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['babel']);
});



gulp.task('default', ['sass', 'babel', 'watch']);