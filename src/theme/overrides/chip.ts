import type { Components } from "@mui/material/styles";

export const MuiChip: Components["MuiChip"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "50px",
      padding: theme.spacing(1, 2),
    }),
  },
};
