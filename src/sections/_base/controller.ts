import settings from "../../config/settings";


export default class {
  settings;

  constructor(private $log) {
    "ngInject";

    this.settings = settings;
  }
}
