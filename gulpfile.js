const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat'); // gulp-concatを追加

function compileSass() {
  return gulp.src('src/sass/**/*.scss') // SASSファイルのソースパス
    .pipe(sass().on('error', sass.logError)) // SASSをコンパイル
    .pipe(concat('style.css')) // コンパイルされたCSSを"style.css"に結合
    .pipe(gulp.dest('dist/css')); // 結合されたCSSを保存するパス
}

exports.compileSass = compileSass; // タスクをエクスポート

function watchSass() {
  gulp.watch('src/sass/**/*.scss', compileSass); // src/sass/ディレクトリ内の全ての.scssファイルを監視
}

exports.watch = watchSass; // watchタスクをエクスポート