import {IApiClient} from "../../components/api-client/interfaces";
import {ISession} from "../../components/session/interfaces";


export function search(
  $log: angular.ILogService,
  $state: ng.ui.IStateService,
  $stateParams: ng.ui.IStateParamsService,
  apiClient: IApiClient,
  session: ISession
) {
  "ngInject";

  Object.assign(session.queryParams, $stateParams);

  $log.debug("Resolving state", $state);

  if (!$stateParams["term"]) {
    return;
  }

  return apiClient.search($stateParams)
  .then((response: angular.IHttpPromiseCallbackArg<any>) => {
    return response.data;
  });
}
