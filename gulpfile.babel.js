var gulp = require("gulp");
var gulp_tasks_ts_1 = require("gulp-tasks-ts");
var environments_ts_1 = require("./src/config/environments.ts");
gulp_tasks_ts_1.makeSettings(environments_ts_1.default);
gulp.task("default", ["serve:dev"], () => { });
