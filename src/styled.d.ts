import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      colorPrimary: string;
      colorPrimaryText: string;
      themeTextColor: string;
      themeTextColor2: string;
    };

    background: string;
    text: string;
    boxShadow: string;
  }
}
