import {IQueryParams} from "../session/interfaces";


export interface IParams extends IQueryParams {
  callback: string;
  limit: number;
};


export interface ISearch {
  (params: IParams | ng.ui.IStateParamsService): angular.IHttpPromise<any>;
};


export interface IApiClient {
  search: ISearch;
};
