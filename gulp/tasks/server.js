import gulp from "gulp";
import config from "../config";
import developmentServer from "../modules/server/development";

gulp.task("server", () => {
  gulp.watch(
    `${config.appDir}/assetshttps://gazizzz.github.io/Vostok/images/**/*`,
    ["images"]
  );
  gulp.watch(`${config.appDir}/assets/fonts/**/*`, ["fonts"]);
  gulp.watch(`${config.appDir}/assets/scripts/**/*`, ["js"]);
  gulp.watch(`${config.appDir}/assets/styles/**/*.scss`, ["scss"]);
  gulp.watch(`${config.appDir}/views/**/*.pug`, ["templates"]);
  developmentServer();
});
