import type { Components, Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - TABLE PAGINATION  ---------------------------------
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
        color: theme.palette.grey[700],
      },
      select: {
        color: theme.palette.grey[500],
        minWidth: 57,
        height: 36,
        borderRadius: 8,
        py:2,
        px:3,
        columnGap: 8,
        border: "1px solid rgba(227, 232, 239, 1)",
        boxSizing: "border-box",
        boxShadow: "0px 1px 2px rgba(10, 13, 18, 0.05)",


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
  };
}
