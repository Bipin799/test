// theme/overrides/iconButton.ts
import type { Components,
   Theme
  } from "@mui/material/styles";

export default function MuiIconButton(
  theme: Theme
): Components["MuiIconButton"] {
  return {
    styleOverrides: {
      root: {
        "&.outlined": {
          borderRadius: 8,
          padding: 6,

          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
