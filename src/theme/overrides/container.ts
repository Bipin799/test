import type { Components, Theme } from "@mui/material/styles";

const MuiContainer = (theme: Theme): Components["MuiContainer"] => ({
  styleOverrides: {
    root: {
      backgroundColor: theme.palette.grey[100],
      borderRadius: 12, 
      paddingTop: theme.spacing(5), 
      paddingBottom: theme.spacing(5), 
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4), 
      display: "flex", 
      flexDirection: "column",
      gap: theme.spacing(4), 
    },
  },
});

export default MuiContainer;
