import gulp from 'gulp';
import config from '../config';

gulp.task('clean', function() {
  return gulp.src([`!${config.distDir}/vendors/`, `${config.distDir}*`])
        .pipe(clean());
});
