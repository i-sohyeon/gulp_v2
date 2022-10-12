import gulp from "gulp";
import gpug from "gulp-pug";

const routes = {
  pug: {
    src: "src/*.pug",
    dest: "build/"
  },
  img: {
    src: "src/img/*",
    dest: "build/img"
  },
};

const pug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(gpug())
    .pipe(gulp.dest(routes.pug.dest));

    const assets = gulp.series([pug]);
    export const dev = gulp.series([assets]);