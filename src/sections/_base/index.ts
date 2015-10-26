import * as angular from "angular";
import "angular-material";

import "angular-ui-router";

import controller from "./controller";

// import "./styles.css";
import template from "./template.html";


function route($stateProvider: ng.ui.IStateProvider) {
  "ngInject";

  $stateProvider.state("_base", {
    abstract: true,
    controller,
    controllerAs: "vm",
    template
  });
}


export default angular.module("app._base", ["ngMaterial", "ui.router"])
.config(route)
.name;
