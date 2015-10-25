export function setStateIsLoading($rootScope: any) {
  "ngInject";

  const scope = $rootScope;

  scope.stateIsLoading = false;

  scope.$on("$stateChangeStart", () => scope.stateIsLoading = true);
  scope.$on("$stateChangeSuccess", () => scope.stateIsLoading = false);
}


export function logStateEvents(
  $log: angular.ILogService,
  $cacheFactory: angular.ICacheFactoryService,
  $rootScope: any
) {
  "ngInject";

  const scope = $rootScope;

  scope.$on("$stateChangeError", (e: any) => $log.debug(`${e.name}`));
  scope.$on("$stateChangeStart", (e: any) => $log.debug(`${e.name}`));
  scope.$on("$stateChangeSuccess", (e: any) => {
    const cache = $cacheFactory.get("_http");

    $log.debug(`${e.name}`);
    if (cache) {
      $log.debug("httpCache:", cache.info());
    }
  });
  scope.$on("$stateNotFound", (e: any) => $log.debug(`${e.name}`));
}
