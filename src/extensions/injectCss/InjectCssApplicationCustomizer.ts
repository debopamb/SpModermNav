import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import * as strings from 'InjectCssApplicationCustomizerStrings';

const LOG_SOURCE: string = 'InjectCssApplicationCustomizer';


export interface IInjectCssApplicationCustomizerProperties {
  cssurl: string;
}

export default class InjectCssApplicationCustomizer
  extends BaseApplicationCustomizer<IInjectCssApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);   

    var coll = document.getElementsByTagName("a");
    for (var i = 0; i < coll.length; i++) {
    if(coll[i].title === "Home"){
        coll[i].href = "https://www.bing.com"
    }
  }

    return Promise.resolve();
  }
}
