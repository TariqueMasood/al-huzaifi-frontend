import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  fonts: {
    primary: "'Open Sans', sans-serif",
    heading: "'Oswald', sans-serif",
  },

  colors: {
    colorPrimary: "#007b5e", // Primary color for the theme "#0056d2" coursera blue color
    colorSecondary: "#c78426", // Secondary color for the theme
    backgroundWhite: "#fff",

    // Text Colors
    colorPrimaryText: "#434343", // Primary Text color for the theme
    colorSecondaryText: "#4f835b", // Sub headers, subtitles, icons
    colorBorder: "#e2f0d9", // Light greenish borders

    // Grey palette
    grey900: "#212121", // Very dark grey - good for headings or deep contrast text
    grey800: "#424242", // Dark grey - secondary text or subdued backgrounds
    grey700: "#616161", // Medium grey - borders, icons, muted UI elements
    grey600: "#757575", // Regular grey - body text, secondary content
    grey500: "#9e9e9e", // Light grey - borders, placeholders
    grey400: "#bdbdbd", // Lighter grey - backgrounds, disabled states
    grey300: "#e0e0e0", // Very light grey - dividers, surfaces
    grey200: "#eeeeee", // Almost white - subtle backgrounds
    grey100: "#f5f5f5", // Off-white grey - page background
    grey50: "#fafafa", // Lightest grey - cards, elevated sections
  },

  boxShadow: "0px 3px 6px 0px rgba(140, 149, 159, 0.15)",
};

export default theme;
