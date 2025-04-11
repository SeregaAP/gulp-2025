import replace from "gulp-replace";
import browserSync from "browser-sync";
import gulpPlumber from "gulp-plumber";
import { notify } from "browser-sync";
import gulpIf from "gulp-if";

export const plugins = {
    replace: replace,
    browserSync: browserSync,
    plumber: gulpPlumber,
    notify: notify,
    if:gulpIf
}