import type { Components, Theme } from "@mui/material/styles";

// ---------------------------------  OVERRIDES - CHIP  ---------------------------------

export default function MuiChip(
  theme: Theme
): Components["MuiChip"] {
  return {
    styleOverrides: {
      root: {
        borderRadius: "50px",
        padding: theme.spacing(2, 0.5),
        fontSize: "12px",
        fontWeight: 500,
        lineHeight:"20px",
      },
    },
    //  variants: [
    //   {
    //     props: { color: "pending" },
    //     style: {
    //       backgroundColor: theme.palette.warning.lighter,
    //       color: theme.palette.warning.main,
    //     },
    //   },
    //   {
    //     props: { color: "hold" },
    //     style: {
    //       backgroundColor: theme.palette.primary.lighter,
    //       color: theme.palette.primary.main,
    //     },
    //   },
    //   {
    //     props: { color: "complete" },
    //     style: {
    //       backgroundColor: theme.palette.success.lighter,
    //       color: theme.palette.success.main,
    //     },
    //   },
    //   {
    //     props: { color: "cancel" },
    //     style: {
    //       backgroundColor: theme.palette.error.lighter,
    //       color: theme.palette.error.main,
    //     },
    //   },
    // ],
  };
}
