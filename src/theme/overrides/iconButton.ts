import type { Components, Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - ICON BUTTON  ---------------------------------

export default function MuiIconButton(
  theme: Theme
): Components["MuiIconButton"] {
  return {
    styleOverrides: {
      root: {
        "&.outlined": {
          borderRadius: 8,
          padding: 6,
        },
      },
    },
  };
}
