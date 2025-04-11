import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${srcFolder}/assets/css/`,
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets/`,
    },
    src:{
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/css/*.scss`,
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    watch:{
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/css/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder:srcFolder,
    rootFolder:rootFolder,
    ftp:`httpdocs`
}
