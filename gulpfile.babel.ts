import * as gulp from "gulp";
import {makeSettings} from "gulp-tasks-ts";

import environments from "./src/config/environments.ts";


makeSettings(environments);
gulp.task("default", ["serve:dev"], () => {});
