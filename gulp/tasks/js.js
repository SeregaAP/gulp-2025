import webpackStream from "webpack-stream";
import minify from "gulp-minify";

export const js = () =>{
    return app.gulp.src(app.path.src.js,{sourcemaps: app.isDev})
    .pipe(webpackStream({
        mode:'development',
        output:{
            filename: 'app.js'
        }
    }))
    .pipe(minify())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}