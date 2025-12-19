import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import components from "./overrides/index";
import typography from "./typography";

const theme = createTheme({
  spacing: 4,
  palette,
  typography,
});

theme.components = components(theme);

export default theme;
