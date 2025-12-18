// theme/typography.ts
import type { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

  h1: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: 1.2,
  },

  h2: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.3,
  },

  h3: {
    fontSize: "20px",
    fontWeight: 600,
  },

  body1: {
    fontSize: "14px",
    fontWeight: 400,
  },

  body2: {
    fontSize: "13px",
    fontWeight: 400,
  },

  button: {
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "none",
  },

  caption: {
    fontSize: "12px",
  },
};

export default typography;
