import gulp from "gulp";

gulp.task("watch", function () {
  gulp.watch(
    ["./app/assetshttps://gazizzz.github.io/Vostok/styles/**/*.scss"],
    ["scss"]
  );
  gulp.watch(
    ["./app/assetshttps://gazizzz.github.io/Vostok/scripts/**/*.js"],
    ["js"]
  );
  gulp.watch(["./app/views/**/*.pug"], ["templates"]);
});
