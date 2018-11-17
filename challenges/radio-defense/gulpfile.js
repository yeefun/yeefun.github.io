const gulp = require('gulp');

/* gulp-load-plugins: 簡化 gulp 載入流程
 ** https://www.npmjs.com/package/gulp-load-plugins
 ** 只能幫忙載入 gulp- 開頭的套件
 */
const $ = require('gulp-load-plugins')();

/* gulp-plumber: 避免出錯即造成排程停止
 ** https://www.npmjs.com/package/gulp-plumber
 ** const plumber = require('gulp-plumber');
 */

/* gulp-pug: HTML 樣板語言
 ** https://www.npmjs.com/package/gulp-pug
 ** const pug = require('gulp-pug');
 */

/* gulp-sass: CSS 預處理器
 ** https://www.npmjs.com/package/gulp-sass
 ** const sass = require('gulp-sass');
 */

/* gulp-postcss: CSS 後處理器，能載入大量插件
 ** https://www.npmjs.com/package/gulp-postcss
 ** const postcss = require('gulp-postcss');
 */

gulp.task('pug', () => {
  return gulp.src('./src/**/*.pug')
    .pipe($.plumber())
    .pipe($.pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public'));
});





gulp.task('sass', () => {
  /* autoprefixer: CSS 前綴， postcss 的延伸套件
   ** https://www.npmjs.com/package/autoprefixer
   */
  const autoprefixer = require('autoprefixer');
  const plugins = [
    autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
    })
  ];

  return gulp.src('./src/scss/**/*.scss')
    .pipe($.plumber())
    /* gulp-sourcemaps: 標示壓縮、合併檔案的程式碼的原始位置
     ** https://www.npmjs.com/package/gulp-sourcemaps
     */
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    // CSS 編譯完成
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});





gulp.task('babel', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['@babel/env']
    }))
    /* gulp-concat: 將 js 檔案合併成同一支，減少 request 次數，增加效能
     ** https://www.npmjs.com/package/gulp-concat
     */
    .pipe($.concat('index.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'));
});





// 監聽檔案變動
gulp.task('watch', () => {
  gulp.watch('./src/**/*.pug', ['pug']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['babel']);
});





// 在 cmd 輸入 gulp，即能一次執行所有任務
gulp.task('default', ['pug', 'sass', 'babel', 'watch']);