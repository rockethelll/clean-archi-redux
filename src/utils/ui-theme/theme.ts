import { GlobalStyles } from "@chakra-ui/theme-tools";
import { ChakraTheme, extendTheme } from "@chakra-ui/react";

export const global = {
  global: {
    html: {
      fontSize: "62.5% !important",
      overflowY: "overlay",
      width: "100vw",
      overflowX: "hidden",
    },
    body: {
      fontSize: "1.6rem",
      background: "gray.200",
    },
    "::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 14px 14px transparent",
      border: "solid 4px transparent",
    },
    "::-webkit-scrollbar": {
      width: "1.4rem",
      height: "1.4rem",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "1rem",
      boxShadow: "inset 0 0 14px 14px #A7A5A6",
      border: "4px solid transparent",
    },
  },
} as GlobalStyles;

type AgTypography = Partial<
  Pick<
    ChakraTheme,
    "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings"
  >
>;

export const typography: AgTypography = {
  fonts: {
    heading:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
};

export const colors = {
  primary: {
    0: "#FFFFFF",
    900: "#222222",
  },
  gray: {
    50: "#FCFBFB",
    100: "#FAFAFA",
    200: "#F7F7F7",
    300: "#E9E9E9",
    400: "#D3D2D2",
    500: "#A7A5A6",
    600: "#7A7979",
    700: "#4E4C4D",
    800: "#383536",
    900: "#222222",
  },
  modalities: {
    E_LEARNING: "#51A1A6",
    PRESENTIAL: "#6776F8",
    VIRTUAL_CLASSROOM: "#E37748",
    MICRO_LEARNING: "#F3685F",
  },
};

export const theme = extendTheme({
  colors,
  typography,
  styles: { ...global },
});

type ThemeType = typeof theme;
declare module "@emotion/react" {
   
  export interface Theme extends ThemeType {}
}
