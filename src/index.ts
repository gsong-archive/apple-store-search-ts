/// <reference path="../typings/tsd.d.ts" />

import * as angular from 'angular';

import app from './app/index';


angular.element(window.document).ready(function() {
  angular.bootstrap(window.document, [app], {strictDi: false});
});