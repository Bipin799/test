import type { Components, Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - TABLE CELL  ---------------------------------
export default function MuiTableCell(
  theme: Theme
): Components["MuiTableCell"] {
  return {
    styleOverrides: {
      root: {
        lineHeight: "20px",
        fontSize: "14px",
        color: theme.palette.grey[700],
      },

      head: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        color: theme.palette.grey[900],
      },
    },
  };
}
