import settings from "../../config/settings";
import urls from "./urls";


export default ($cacheFactory, $http) => {
  "ngInject";

  const cache = $cacheFactory("_http", {
    capacity: settings.HTTP_CACHE_SIZE
  });

  function search(
    params: {media: string, term: string, callback: string, limit: number}
  ) {
    params.callback = "JSON_CALLBACK";
    params.limit = 200;
    return $http.jsonp(urls.SEARCH, {params, cache});
  }

  return {search};
};
