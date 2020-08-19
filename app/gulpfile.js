const {
  src, dest, watch, series, parallel,
} = require('gulp');
const sourceMaps = require('gulp-sourcemaps');
const scss = require('gulp-sass');
const postCss = require('gulp-postcss');
const autoPrefixer = require('autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// const replace = require('gulp-replace');

const files = {
  htmlPath: './src/*.html',
  scssPath: './src/scss/**/*.scss',
  jsPath: './src/js/**/*.js',
};

function scssTaskRunner() {
  return src(files.scssPath)
    .pipe(sourceMaps.init())
    .pipe(scss())
    .pipe(postCss([autoPrefixer()]))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('dist/css'));
}

// setup js taskrunner.
function jsTaskRunner() {
  return src(files.jsPath) // locate js files
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify()) // minify main.js
    .pipe(dest('dist')); // save to dist folder
}

// const cbString = new Date().getTime();

// function cacheBustTaskRunner() {
// return src(files.htmlPath)
// .pipe(replace(/cb=\d+/g, `cb=${cbString}`))
// .pipe(dest('dist'));
// }

function watchTaskRunner() {
  watch(
    [files.scssPath, files.jsPath],
    parallel(scssTaskRunner, jsTaskRunner),
  );
}

exports.default = series(
  parallel(scssTaskRunner, jsTaskRunner),
  // cacheBustTaskRunner,
  watchTaskRunner,
);
