import {IQueryParams} from "../session/interfaces";


export interface IParams extends IQueryParams {
  callback: string;
  limit: number;
}


interface IResultDetail {
  wrapperType: string;
  kind: string;
  artistName?: string;
  artistViewURL?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionCensoredName?: string;
  collectionExplicitness?: string;
  collectionName?: string;
  collectionPrice?: number;
  collectionViewURL?: string;
  contentAdvisoryRating?: string;
  country?: string;
  currency?: string;
  longDescription?: string;
  previewUrl?: string;
  primaryGenreName?: string;
  radioStationUrl?: string;
  releaseDate?: string;
  trackCensoredName?: string;
  trackExplicitness?: string;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  trackId?: number;
  trackName?: string;
  trackTimeMillis?: number;
  trackViewUrl?: string;
}


export interface IResult {
  resultCount: number;
  results: IResultDetail[];
}


export interface ISearch {
  (params: IParams | ng.ui.IStateParamsService): angular.IHttpPromise<IResult>;
}


export interface IApiClient {
  search: ISearch;
}
