import {IRootScopeService} from "./interfaces";


export function setStateIsLoading($rootScope: IRootScopeService) {
  "ngInject";

  const scope = $rootScope;

  scope.stateIsLoading = false;

  scope.$on("$stateChangeStart", () => scope.stateIsLoading = true);
  scope.$on("$stateChangeSuccess", () => scope.stateIsLoading = false);
}


export function logStateEvents(
  $log: angular.ILogService,
  $cacheFactory: angular.ICacheFactoryService,
  $rootScope: IRootScopeService
) {
  "ngInject";

  const scope = $rootScope;

  scope.$on(
    "$stateChangeError", (e: angular.IAngularEvent) => $log.debug(`${e.name}`)
  );
  scope.$on(
    "$stateChangeStart", (e: angular.IAngularEvent) => $log.debug(`${e.name}`)
  );
  scope.$on("$stateChangeSuccess", (e: angular.IAngularEvent) => {
    const cache = $cacheFactory.get("_http");

    $log.debug(`${e.name}`);
    if (cache) {
      $log.debug("httpCache:", cache.info());
    }
  });
  scope.$on("$stateNotFound", (
    e: angular.IAngularEvent) => $log.debug(`${e.name}`)
  );
}
