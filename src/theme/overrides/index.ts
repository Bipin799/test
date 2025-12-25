
import type { Components, Theme } from "@mui/material/styles";

// @project
import MuiButton from "./button";
import MuiCardHeader from "./cardHeader";
import MuiChip from "./chip";
import MuiIconButton from "./iconButton";
import MuiTablePagination from "./tablePagination";
import MuiTableCell from "./tableCell";
import MuiContainer from "./container";
import MuiTableRow from "./tableRow";
import MuiTextField from "./textfield";
import MuiOutlinedInput from "./outlinedInput";

// ---------------------------------  OVERRIDES - INDEX  ---------------------------------
export default function components(theme: Theme): Components {
  return {
    MuiButton: MuiButton(),
    MuiChip: MuiChip(theme),
    MuiIconButton: MuiIconButton(theme),
    MuiCardHeader: MuiCardHeader(theme),
    MuiTableCell: MuiTableCell(theme),
    MuiTablePagination: MuiTablePagination(theme),
    MuiContainer: MuiContainer(theme),
    MuiTableRow: MuiTableRow(theme),
    MuiTextField: MuiTextField(),
    MuiOutlinedInput: MuiOutlinedInput(theme),
  };
}
 