import settings from "../config/settings";


export function controlDebugLogging($logProvider: angular.ILogProvider) {
  "ngInject";

  $logProvider.debugEnabled(settings.ENABLE_DEBUG_LOGGING || false);
}


export function configUIRouter($urlRouterProvider: ng.route.IRouteProvider) {
  "ngInject";

  $urlRouterProvider.otherwise("/search");
}
