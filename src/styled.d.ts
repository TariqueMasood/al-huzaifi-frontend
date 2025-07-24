import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      colorPrimary: string;
      colorSecondary: string;
      backgroundWhite: string;
      colorPrimaryText: string;
      colorSecondaryText: string;
      colorBorder: string;
      colorMuted: string;
    };

    boxShadow: string;
  }
}
