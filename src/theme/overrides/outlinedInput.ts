import type { Components, Theme } from "@mui/material/styles";

export default function MuiOutlinedInput(
  theme: Theme
): Components["MuiOutlinedInput"] {
  return {
    styleOverrides: {
      root: {
        '&[data-search="true"]': {
          height: 44,
          borderRadius: 12,
          backgroundColor: theme.palette.grey[50],
          boxShadow: "0px 1px 2px rgba(10,13,18,0.08)",
          color: theme.palette.grey[500],

          "& fieldset": {
            borderColor: theme.palette.grey[200],
          },
          "&:hover fieldset": {
            borderColor: theme.palette.grey[200],
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.grey[200],
            borderWidth: 1,
          },

          "& input": {
            padding: "10px 12px",
            fontSize: 16,
            lineHeight: "20px",
          },
        },
      },
    },
  };
}
