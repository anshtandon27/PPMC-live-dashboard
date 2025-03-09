import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { linkStyles } from "./components/link";
import { inputStyles } from "./components/input";
import { CardComponent } from "./additions/card/Card";
import { MainPanelComponent } from "./additions/layout/MainPanel";
import { PanelContentComponent } from "./additions/layout/PanelContent";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";
// import { mode } from "@chakra-ui/theme-tools";

// Custom color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Penn Medicine colors
const pennColors = {
  blue: {
    50: "#E6EBF4",
    100: "#C1CDE4",
    200: "#9AACD3",
    300: "#738BC2",
    400: "#4C6AB1",
    500: "#254AA1", // Lighter Penn Blue
    600: "#011F5B", // Penn Blue (primary)
    700: "#011A4F",
    800: "#011543",
    900: "#000F37",
  },
  red: {
    50: "#FFE6E6",
    100: "#FFBFBF",
    200: "#FF9999",
    300: "#FF7373",
    400: "#FF4D4D",
    500: "#FF2626",
    600: "#990000", // Penn Red (primary)
    700: "#800000",
    800: "#660000",
    900: "#4D0000",
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },
};

const theme = extendTheme(
  { config },
  globalStyles,
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
  linkStyles, // Link styles
  inputStyles, // Input styles
  CardComponent, // Card component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent, // Panel Container component
  {
    colors: pennColors,
    fonts: {
      heading: "'Roboto', sans-serif",
      body: "'Roboto', sans-serif",
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: "8px",
          boxShadow: "0 4px 7px -1px rgba(0,0,0,0.11), 0 2px 4px -1px rgba(0,0,0,0.07)",
          transition: "all .15s ease",
        },
        variants: {
          primary: {
            bg: "blue.600", // Penn Blue
            color: "white",
            _hover: { bg: "blue.700" },
            _active: { bg: "blue.800" },
          },
          secondary: {
            bg: "red.600", // Penn Red
            color: "white",
            _hover: { bg: "red.700" },
            _active: { bg: "red.800" },
          },
        },
      },
      Card: {
        baseStyle: {
          borderRadius: "16px",
          boxShadow: "0 8px 26px -4px rgba(1,31,91,0.15), 0 8px 9px -5px rgba(1,31,91,0.06)",
          bg: "white",
          borderTop: "3px solid",
          borderTopColor: "blue.600", // Penn Blue accent
        },
        variants: {
          primary: {
            borderTopColor: "blue.600", // Penn Blue
          },
          secondary: {
            borderTopColor: "red.600", // Penn Red
          },
          stats: {
            borderTopColor: "transparent",
            bg: "white",
            boxShadow: "0 4px 12px rgba(1,31,91,0.08)",
          },
        },
      },
      IconBox: {
        baseStyle: {
          bg: "blue.600", // Penn Blue
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(1,31,91,0.2)",
        },
      },
      Progress: {
        baseStyle: {
          track: {
            bg: "blue.50",
          },
        },
        defaultProps: {
          colorScheme: "blue",
        },
      },
    },
  }
);

export default theme;
