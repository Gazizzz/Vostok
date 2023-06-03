import gulp from "gulp";
import config from "../config";

gulp.task("images", () => {
  return gulp
    .src(`${config.appDir}/assetshttps://gazizzz.github.io/Vostok/images/**/*`)
    .pipe(gulp.dest(`${config.distDir}/images`));
});

gulp.task("fonts", () => {
  return gulp
    .src(`${config.appDir}/assets/fonts/**/*`)
    .pipe(gulp.dest(`${config.distDir}/fonts`));
});
