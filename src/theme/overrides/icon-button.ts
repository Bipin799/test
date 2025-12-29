// ---------------------------------  OVERRIDES - ICON BUTTON  ---------------------------------

export default function IconButton() {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.outlined": {
            borderRadius: 8,
            padding: 6,
          },
        },
      },
    },
  };
}