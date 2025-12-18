import type { Components } from "@mui/material/styles";

export const MuiTablePagination: Components["MuiTablePagination"] = {
  styleOverrides: {
    selectLabel: ({ theme }) => ({
      color: theme.palette.grey[500],
      fontWeight: 500,
    }),
    displayedRows: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
  },
};
