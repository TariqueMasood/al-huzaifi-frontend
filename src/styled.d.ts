import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      colorPrimary: string;
      colorSecondary: string;
      colorPrimaryText: string;
    };

    backgroundWhite: string;
    boxShadow: string;
  }
}
