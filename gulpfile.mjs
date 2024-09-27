import gulp from "gulp";
import uglify from "gulp-uglify";
import sass from "gulp-dart-sass";
import cleanCss from "gulp-clean-css";
import media from "gulp-group-css-media-queries";
import rename from "gulp-rename";
// Configurable params.
const settings = {

  // Where source files are located.
  sassSrcFiles: [ 'assets/scss/**/*.scss'],
  jsSrcDirs: [ 'assets/js/**/*.js' ],

  // Where each asset files will be stored.
  sassDestFiles: 'assets/dist/css',
  jsDestFiles: 'assets/dist/js'
};

const sassTask = () => {
  return gulp.src(settings.sassSrcFiles)
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(media())
    .pipe(cleanCss())
    .pipe(gulp.dest(settings.sassDestFiles));
};

const jsTask = () => {
  return gulp.src(settings.jsSrcDirs)
    .pipe(rename({ dirname: '' }))
    .pipe(uglify())
    .pipe(gulp.dest(settings.jsDestFiles));
};

/**
 * Build task.
 */
const buildTask = gulp.parallel(
  sassTask,
  jsTask
);

/**
 * Watcher.
 */
function watcherTask () {
  buildTask();
  gulp.watch(settings.sassSrcFiles, sassTask);
  gulp.watch(settings.jsSrcDirs, jsTask);
}


export default buildTask;

export {buildTask as build}
export {watcherTask as watch}
