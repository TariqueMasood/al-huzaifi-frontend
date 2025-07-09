// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      themeColor3: string;
      themeColor2: string;
      themeColor: string;
      activeBg: string;
      activeTextColor: string;
      darkBg: string;
      themeTextColor: string;
      themeTextColor2: string;
      themeTextColor3: string;
      sidebarBackground: string;
      headerBackground: string;
      footerBackground: string;
      yellowColor: string;
      yellowColor2: string;
    };

    background: string;
    secondaryBg: string;
    text: string;
    toggleBorder: string;
    boxShadow: string;
    border: string;
    cardDividerColor: string;
  }
}
