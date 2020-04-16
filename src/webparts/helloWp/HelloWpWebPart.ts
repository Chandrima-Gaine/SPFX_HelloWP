import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWpWebPart.module.scss';
import * as strings from 'HelloWpWebPartStrings';

export interface IHelloWpWebPartProps {
  description: string;
}

export default class HelloWpWebPart extends BaseClientSideWebPart<IHelloWpWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.helloWp }">
        <div class="${ styles.container }">
              <span class="${ styles.title }">Welcome to Fish World</span>
              <img src="https://arksptraining.sharepoint.com/sites/AppCatalogSite/Documents/Fish.jpg" style="height:400px; width:700px;">
              <button class="${ styles.button }" type="button" onclick="alert('Welcome!!!')">Click Me!</button>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
