// @mui
import { createTheme } from "@mui/material/styles";

// @project
import components from "./overrides";
import { palette } from "./palette";
import typography from "./typography";

// ---------------------------------  THEME - INDEX  ---------------------------------
const theme = createTheme({
  spacing: 4,
  palette,
  typography,
});

theme.components = components(theme);

export default theme;
