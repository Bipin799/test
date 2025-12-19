// theme/components/TablePagination.ts
import type { Components, Theme } from "@mui/material/styles";

export default function MuiTablePagination(
  theme: Theme
): Components["MuiTablePagination"] {
  return {
    styleOverrides: {
      selectLabel: {
        fontSize:"14px",
        color: theme.palette.grey[500],
        fontWeight: 500,
      },
      displayedRows: {
        color: theme.palette.text.secondary,
      },
    },
  };
}
