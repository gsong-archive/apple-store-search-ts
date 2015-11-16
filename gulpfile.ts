import "babel-polyfill";
import {makeSettings} from "gulp-tasks-ts";
import * as gulp from "gulp";

import environments from "./src/config/environments";


makeSettings(environments);
gulp.task("default", ["serve:dev"], () => {});
