// ---------------------------------  OVERRIDES - BUTTON  ---------------------------------

export default function MuiButton() {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          boxShadow: "none",

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  };
}
