import settings from "../../config/settings";
import urls from "./urls";
import {IApiClient, IParams, ISearch} from "./interfaces";


export default (
  $cacheFactory: angular.ICacheFactoryService, $http: angular.IHttpService
): IApiClient => {
  "ngInject";

  const cache = $cacheFactory("_http", {
    capacity: settings.HTTP_CACHE_SIZE
  });

  function search(params: IParams) {
    params.callback = "JSON_CALLBACK";
    params.limit = 200;
    return $http.jsonp(urls.SEARCH, {params, cache});
  }

  return {search};
};
