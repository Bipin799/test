import type { Components } from "@mui/material/styles";

export const MuiTableCell: Components["MuiTableCell"] = {
    
  styleOverrides: {
    root: ({ theme }) => ({
      lineHeight: "20px",
      color: "#364152",
    }),

    head: ({ theme }) => ({
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "20px",
      color: theme.palette.grey[900],
    }),
  },

  variants: [
    {
      props: { variant: "id" as any },
      style: ({ theme }) => ({
        color: theme.palette.grey[900],
        fontWeight: 600,
        fontSize: "14px",
      }),
    },
  ],
};
