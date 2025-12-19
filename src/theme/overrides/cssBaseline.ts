import type { Components, Theme } from "@mui/material/styles";

const MuiCssBaseline = (theme: Theme): Components["MuiCssBaseline"] => ({
  styleOverrides: {
    html: {
      scrollBehavior: "smooth",
      height: "100%",
    },

    body: {
      margin: 0,
      minHeight: "100%",
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[900],
      fontFamily: theme.typography.fontFamily,
      lineHeight: 1.5,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      overflowX: "hidden",
    },

    "*": {
      boxSizing: "border-box",
    },

    "*::before": {
      boxSizing: "border-box",
    },

    "*::after": {
      boxSizing: "border-box",
    },

    a: {
      color: "inherit",
      textDecoration: "none",
    },

    img: {
      maxWidth: "100%",
      display: "block",
    },

    button: {
      fontFamily: "inherit",
    },

    input: {
      fontFamily: "inherit",
    },

    textarea: {
      fontFamily: "inherit",
    },

    // "::selection": {
    //   backgroundColor: theme.palette.primary.light,
    //   color: theme.palette.primary.contrastText,
    // },

    "::-webkit-scrollbar": {
      width: 8,
      height: 8,
    },

    "::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.grey[300],
      borderRadius: 4,
    },

    "::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.grey[100],
    },
  },
});

export default MuiCssBaseline;
