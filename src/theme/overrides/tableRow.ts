import type { Components, Theme } from "@mui/material/styles";

export default function MuiTableRow(theme: Theme): Components["MuiTableRow"] {
  return {
    styleOverrides: {
      root: {
        /* Hover for all non-selected rows */
        "&.MuiTableRow-hover:hover:not(.Mui-selected)": {
          backgroundColor: theme.palette.grey[50],
        },

        /* Selected row background */
        "&.Mui-selected": {
          backgroundColor: theme.palette.primary.lighter,
        },

        /* Selected row should NOT change on hover */
        "&.Mui-selected.MuiTableRow-hover:hover": {
          backgroundColor: theme.palette.primary.lighter,
        },

      },
    },
  };
}
