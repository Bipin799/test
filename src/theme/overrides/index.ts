
import type { Components, Theme } from "@mui/material/styles";

// @project
import MuiButton from "./button";
import MuiCardHeader from "./card-header";
import MuiChip from "./chip";
import MuiIconButton from "./icon-button";
import MuiTablePagination from "./table-pagination";
import MuiTableCell from "./table-cell";
import MuiContainer from "./container";
import MuiTableRow from "./table-row";
import MuiOutlinedInput from "./outlined-input";

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
    MuiOutlinedInput: MuiOutlinedInput(theme),
  };
}
