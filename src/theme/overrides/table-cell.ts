// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - TABLE CELL  ---------------------------------

export default function TableCell(theme: Theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          lineHeight: "20px",
          fontSize: 14,
          color: theme.palette.grey[700],
        },
        head: {
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: theme.palette.grey[900],
        },
      },
    },
  };
}
