import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
    primary: string;
    heading: string;
  },

    colors: {
      colorPrimary: string;
      colorSecondary: string;
      backgroundWhite: string;
      colorPrimaryText: string;
      colorSecondaryText: string;
      colorBorder: string;
      grey900: string;
      grey800: string; 
      grey700: string;
      grey600: string;
      grey500: string;
      grey400: string;
      grey300: string;
      grey200: string;
      grey100: string;
      grey50: string;
    };

    boxShadow: string;
  }
}
