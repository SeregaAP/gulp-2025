import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(dartSass);

export const scss = () =>{
    return app.gulp.src(app.path.src.scss,{sourcemaps: app.isDev})
    .pipe(sass({
        silenceDeprecations: ['legacy-js-api'],
        outputStyle: 'expanded'
    }))
    .pipe(app.plugins.replace(/@img\//g,'../images/'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}