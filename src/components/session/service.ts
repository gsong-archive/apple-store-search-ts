import settings from "../../config/settings";
import {IQueryParams} from "./interfaces";


export default class {
  queryParams: IQueryParams;

  constructor() {
    this.queryParams = Object.assign({}, settings.DEFAULT_QUERY_PARAMS);
  }
}
