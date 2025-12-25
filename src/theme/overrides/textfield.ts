
export default function MuiTextField() {
  return {
    defaultProps: {
      slotProps: {
        input: {},
      },
    },
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root[data-search="true"]': {
          width: 320,
        },
      },
    },
  };
}
