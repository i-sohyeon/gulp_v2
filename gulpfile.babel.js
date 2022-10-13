import gulp from "gulp";
import gpug from "gulp-pug";
import ws from "gulp-webserver";

const sass = require('gulp-sass')(require('sass'));
// sass.compiler = require("node-sass");

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
  scss: {
    watch:"src/scss/**/*.scss",
    src: "src/scss/style.scss",
    dest: "build/css"
  }
};

const pug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(gpug())
    .pipe(gulp.dest(routes.pug.dest));

const styles = () => 
  gulp.src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(routes.scss.dest));

const webserver = () => gulp.src("build").pipe(ws({livereload: true, open: true}));

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.scss.watch, styles);
};

//오류 생략
// const img = () => 
//   gulp.src(routes.img.src)
//   .pipe(image())
//   .pipe(gulp.dest(routes.img.dest));

const assets = gulp.series([pug, styles]);
const postDev = gulp.parallel([webserver, watch]);
//parallel 두가지 task를 병행할 수 있음

export const dev = gulp.series([assets, postDev]);