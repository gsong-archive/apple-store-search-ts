import settings from "../../config/settings";


export class SearchController {
  queryParams;
  searchTypes;

  constructor(private $log, private $state, session) {
    "ngInject";

    this.queryParams = session.queryParams;
    this.searchTypes = settings.MEDIA_TYPES;
  }

  search(queryParams) {
    const params = queryParams || settings.DEFAULT_QUERY_PARAMS;
    this.$state.go("search", params);
  }
}


export class ResultsController {
  response;

  constructor(private $log, $scope, private $state, response) {
    "ngInject";

    $log.debug("Search response: ", response);

    this.response = response;
  }

  get showResults() {
    return Boolean(this.$state.params.term);
  }
}
