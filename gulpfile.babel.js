var gulp_tasks_ts_1 = require("gulp-tasks-ts");
var gulp = require("gulp");
var environments_1 = require("./src/config/environments");
gulp_tasks_ts_1.makeSettings(environments_1.default);
gulp.task("default", ["serve:dev"], () => { });
