// @mui
import type { Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - TABLE PAGINATION  ---------------------------------

export default function TablePagination(theme: Theme) {
  return {
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          fontSize: "14px",
          color: theme.palette.grey[500],
          fontWeight: 500,
        },
        displayedRows: {
          color: theme.palette.grey[700],
        },
        select: {
          color: theme.palette.grey[500],
          minWidth: 57,
          height: 36,
          borderRadius: 8,
          py: 2,
          px: 3,
          columnGap: 8,
          border: `1px solid ${theme.palette.grey[200]}`,
        },
        actions: {
          "& .MuiIconButton-root": {
            color: theme.palette.grey[700],

            "&:hover": {
              backgroundColor: theme.palette.primary.lighter,
            },

            "&.Mui-disabled": {
              color: theme.palette.grey[500],
            },
          },
        },
      },
    },
  };
}
