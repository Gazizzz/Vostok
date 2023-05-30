import gulp from 'gulp';
import config from '../config';

gulp.task('images', () => {
  return gulp.src(`${config.appDir}/assets/images/**/*`)
    .pipe(gulp.dest(`${config.distDir}/images`));
});

gulp.task('fonts', () => {
  return gulp.src(`${config.appDir}/assets/fonts/**/*`)
    .pipe(gulp.dest(`${config.distDir}/fonts`));
});
