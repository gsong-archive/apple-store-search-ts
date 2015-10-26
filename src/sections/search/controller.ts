import {IMediaTypes} from "../../config/interfaces";
import {IQueryParams, ISession} from "../../components/session/interfaces";
import {IResult} from "../../components/api-client/interfaces";
import settings from "../../config/settings";


export class SearchController {
  queryParams: IQueryParams;
  searchTypes: IMediaTypes;

  constructor(
    private $log: angular.ILogService,
    private $state: ng.ui.IStateService,
    session: ISession
  ) {
    "ngInject";

    this.queryParams = session.queryParams;
    this.searchTypes = settings.MEDIA_TYPES;
  }

  search(queryParams: IQueryParams) {
    const params = queryParams || settings.DEFAULT_QUERY_PARAMS;
    this.$state.go("search", params);
  }
}


export class ResultsController {
  constructor(
    private $log: angular.ILogService,
    $scope: angular.IScope,
    private $state: ng.ui.IStateService,
    private response: IResult
  ) {
    "ngInject";

    $log.debug("Search response: ", response);
  }

  get showResults() {
    return Boolean(this.$state.params["term"]);
  }
}
