// theme/overrides/stack.ts
import type { Components, Theme } from "@mui/material/styles";

export default function MuiStack(
  _theme: Theme
): Components["MuiStack"] {
  return {
    defaultProps: {
      px: 3,
      py: 2.5,
    },
  };
}
