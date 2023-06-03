import gulp from "gulp";
import plumber from "gulp-plumber";
import scss from "gulp-sass";
import notify from "gulp-notify";
import autoprefixer from "gulp-autoprefixer";
import config from "../config";

gulp.task("scss", () => {
  gulp
    .src(
      `${config.appDir}/assetshttps://gazizzz.github.io/Vostok/styles/app.scss`
    )
    .pipe(plumber())
    .pipe(
      scss({
        includePaths: ["./node_modules/foundation-sites/scss/"],
      })
    )
    .on("error", notify.onError())
    .pipe(autoprefixer("last 2 version"))
    .pipe(
      gulp.dest(`${config.distDir}https://gazizzz.github.io/Vostok/styles/`)
    );

  gulp
    .src(
      `${config.appDir}/assetshttps://gazizzz.github.io/Vostok/styles/fonts.scss`
    )
    .pipe(plumber())
    .pipe(scss())
    .on("error", notify.onError())
    .pipe(autoprefixer("last 2 version"))
    .pipe(
      gulp.dest(`${config.distDir}https://gazizzz.github.io/Vostok/styles/`)
    );
});
