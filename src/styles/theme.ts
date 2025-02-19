// src/theme.ts
import { extendTheme } from "@chakra-ui/react";
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";
import { customGrayPalette } from "./colors";

// Define the theme configuration

const fonts = {
  heading: "'BasteleurFont', sans-serif", // Custom font for headings
  body: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
};

// Extend the Chakra theme
const customTheme = extendTheme({
  config: {
    initialColorMode: "light", // Set the default mode to dark
    useSystemColorMode: false, // Disable using the system's color mode preference
  },

  global: (props: GlobalStyleProps) => ({
    "@font-face": [
      {
        fontFamily: "BasteleurFont",
        src: "url('/fonts/Basteleur-bold.otf') format('otf'), url('/fonts/Basteleur-bold') format('otf')",
        fontWeight: "normal",
        fontStyle: "normal",
      },
    ],
    body: {
      fontFamily: fonts.body,
      bg: mode("white", "gray.800")(props), // Ensure background color changes for light/dark mode
    },
    heading: {
      fontFamily: fonts.heading,
      color: mode("cardinal.500", "anzac.500")(props),
    },
  }),

  colors: {
    dark: {
      bg: "gray.900", // Dark background for dark mode
      color: "gray.50", // Lighter text color for better contrast in dark mode
    },
    light: {
      bg: "anzac.100", // Light background for light mode
      color: "gray.900", // Dark text for better contrast in light mode
    },
    gray: customGrayPalette, // Override the default gray palette
    customGray: customGrayPalette,
    anzac: {
      50: "#eed09c",
      100: "#ebc788",
      200: "#e7bd74",
      300: "#e4b461",
      400: "#e0aa4d",
      500: "#dda139",
      600: "#c79133",
      700: "#b1812e",
      800: "#9b7128",
      900: "#856122",
    },
    cardinal: {
      50: "#f5d5d8",
      100: "#e67c89",
      200: "#e26675",
      300: "#dd5161",
      400: "#d93b4e",
      500: "#c33840",
      600: "#c02134",
      700: "#aa1e2e",
      800: "#951a29",
      900: "#6b131d",
    },
  }, // Add a separate customGray palette

  styles: {
    global: {
      html: {
        overscrollBehavior: "none", // Disable overscroll globally
      },
      body: {
        overscrollBehavior: "none", // Ensure no overscroll on the body
      },
    },
  },
});
export default customTheme;
