/// <reference path="../../../typings/tsd.d.ts" />

import * as angular from 'angular';

import factory from './service';


export default angular.module('component.apiClient', [])
.factory('apiClient', factory)
.name;
