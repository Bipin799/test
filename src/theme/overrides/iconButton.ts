import type { Components } from "@mui/material/styles";

export const MuiIconButton: Components["MuiIconButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.outlined": {
        borderRadius: 8,
        padding: 6,

        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }),
  },
};
