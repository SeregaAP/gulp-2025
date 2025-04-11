import { configFTP} from "../config/ftp.js";

import FtpConnection from "vinyl-ftp";
import util from "gulp-util";

export const ftp = () =>{
    configFTP.log = util.log;
    const ftp_cnt = FtpConnection.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`,{})
    .pipe(ftp_cnt.dest(`/${app.path.ftp}/`));
}