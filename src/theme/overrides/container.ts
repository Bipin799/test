// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - CONTAINER  ---------------------------------

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[100],
          paddingTop: theme.spacing(5),
          paddingBottom: theme.spacing(5),
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
      },
    },
  };
}
