/// <reference path="../../../typings/tsd.d.ts" />

import * as angular from 'angular';

import service from './service';


export default angular.module('component.session', [])
.service('session', service)
.name;
