import settings from "../../config/settings";
import {ISettings} from "../../config/interfaces";


export default class {
  settings: ISettings;

  constructor(private $log: angular.ILogService) {
    "ngInject";

    this.settings = settings;
  }
}
