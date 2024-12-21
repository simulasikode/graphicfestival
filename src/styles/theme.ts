import { extendTheme } from "@chakra-ui/react";

// Define the colors for light mode and dark mode
const theme = extendTheme({
  config: {
    // Initial color mode (light or dark)
    initialColorMode: "light",
    useSystemColorMode: true, // Use the system's color mode preference
  },
  colors: {
    secondary: {
      50: "#e4f0ff",
      100: "#b3d4ff",
      200: "#80baff",
      300: "#4d9fff",
      400: "#1a85ff",
      500: "#006bff", // Main "500" shade
      600: "#0055cc",
      700: "#004199",
      800: "#002e66",
      900: "#001933",
    },
    primary: {
      50: "#ffe4e4",
      100: "#ffb3b3",
      200: "#ff8080",
      300: "#ff4d4d",
      400: "#ff1a1a",
      500: "#e60000", // Main "500" shade
      600: "#b40000",
      700: "#820000",
      800: "#500000",
      900: "#210000",
    },
    // Light Mode
    light: {
      bg: "#ffffff",
      text: "#000000",
    },
    // Dark Mode
    dark: {
      bg: "#121212",
      text: "#eaeaea",
    },
  },
});

export default theme;
