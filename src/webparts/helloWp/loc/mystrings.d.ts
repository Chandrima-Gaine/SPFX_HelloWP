declare interface IHelloWpWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWpWebPartStrings' {
  const strings: IHelloWpWebPartStrings;
  export = strings;
}
