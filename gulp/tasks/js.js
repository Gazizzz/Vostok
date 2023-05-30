import gulp from 'gulp';
import config from '../config';

gulp.task('js', function () {
  return gulp.src(`${config.appDir}/assets/scripts/**/*.js`)
    .pipe(gulp.dest(`${config.distDir}/scripts/`))
});
