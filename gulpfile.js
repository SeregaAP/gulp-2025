import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";


global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp,
    path: path,
    plugins: plugins,
}


import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

function watcher() {
    gulp.watch(path.watch.html,html);
    gulp.watch(path.watch.assets,copy);
    gulp.watch(path.watch.scss,scss);
    gulp.watch(path.watch.js,js);
}

const mainTasks = gulp.parallel(copy,html,scss,js);

const dev = gulp.series(reset,mainTasks,gulp.parallel(watcher,server));
const build = gulp.series(reset,mainTasks);
const deployZip = gulp.series(reset,mainTasks,zip);
const deployFtp = gulp.series(reset,mainTasks,ftp);


export { dev }
export { build }
export { deployZip }
export { deployFtp }

gulp.task('default',dev);