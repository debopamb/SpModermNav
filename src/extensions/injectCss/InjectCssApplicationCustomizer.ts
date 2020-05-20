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

  //   var coll = document.getElementsByTagName("a");
  //   for (var i = 0; i < coll.length; i++) {
  //   if(coll[i].title === "Home"){
  //       coll[i].href = "https://www.bing.com"
  //   }
  // }

      var lists = document.getElementsByTagName("nav");
      var li = document.createElement('li');
      li.innerHTML = '<div name="new link added" class="ms-Nav-compositeLink compositeLink-130"><a class="ms-Button ms-Button--action ms-Button--command ms-Nav-link link-139" href="https://www.bing.com" title="new link added" data-is-focusable="true" tabindex="0"><span class="ms-Button-flexContainer flexContainer-87" data-automationid="splitbuttonprimary"><div class="ms-Nav-linkText linkText-70">new link added</div></span></a></div>'; 
      li.className = 'ms-Nav-navItem navItem-75';
      for (var i = 0; i < lists.length; ++i) {
              var items = lists[i].getElementsByTagName("ul");
              for (var j = 0; j < 1; ++j) {
                  items[j].prepend(li);
              }          
      }
    return Promise.resolve();
  }
}
