import type { Components } from "@mui/material/styles";

export const MuiTypography: Components["MuiTypography"] = {
  styleOverrides: {
    h4: ({ theme }) => ({
      color: theme.palette.grey[900],
    }),
  },
};
