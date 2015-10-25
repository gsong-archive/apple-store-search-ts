import settings from "../../config/settings";


export default class {
  queryParams: {media: string, term: string};

  constructor() {
    this.queryParams = Object.assign({}, settings.DEFAULT_QUERY_PARAMS);
  }
}
