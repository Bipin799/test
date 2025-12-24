export default function MuiButton() {
  return {
    styleOverrides: {
      root: {
        borderRadius: 8
      },
    },
    variants: [
      {
        props: { size: "medium" },
        style: {
          py: 2,
          px: 3,
          fontSize: "12px",
        },
      },

    ],
  };
}
