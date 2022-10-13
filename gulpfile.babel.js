import gulp from "gulp";
import gpug from "gulp-pug";
import ws from "gulp-webserver";

const routes = {
  pug: {
    watch: "src/**/*.pug",
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

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open: true}));

const watch = () => {
  gulp.watch(routes.pug.watch, pug)
};
const assets = gulp.series([pug]);
const postDev = gulp.parallel([webserver, watch]);
//parallel 두가지 task를 병행할 수 있음
export const dev = gulp.series([assets, postDev]);