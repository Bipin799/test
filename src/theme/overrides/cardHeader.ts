import type { Components } from "@mui/material/styles";

export const MuiCardHeader: Components["MuiCardHeader"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      gap: "15px",
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
    }),

    title: ({ theme }) => ({
      fontSize: "16px",
      color: theme.palette.grey[900],
      textAlign: "left",
    }),
  },
};