const {src, dest, watch, series, parallel} = require('gulp');
const sourceMaps = require('gulp-sourcemaps');
const scss = require('gulp-sass');
const postCss = require('gulp-postcss');
const autoPrefixer = require('autoprefixer');
const replace = require('gulp-replace');


const files = {
  htmlPath: './src/*.html',
  scssPath: './src/scss/**/*.scss',
};

function scssTaskRunner() {
  return src(files.scssPath)
    .pipe(sourceMaps.init())
    .pipe(scss())
    .pipe(postCss( [ autoPrefixer() ] ))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('dist/css'))
}

const cbString = new Date().getTime();

function cacheBustTaskRunner() {
  return src(files.htmlPath)
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('dist'))
}

function watchTaskRunner() {
  watch(
    files.scssPath,
    parallel(scssTaskRunner,cacheBustTaskRunner)
  )
}

exports.default = series(
  scssTaskRunner,
  cacheBustTaskRunner,
  watchTaskRunner
)