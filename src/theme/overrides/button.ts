import type { Components } from "@mui/material/styles";

export const MuiButton: Components["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 8,
      ...theme.typography.button,
    }),

    outlined: ({ theme }) => ({
      border: "1px solid",
    }),
  },
};
 