import * as angular from "angular";

import app from "./app/index";


angular.element(document).ready(function() {
  angular.bootstrap(document, [app], {strictDi: false});
});
