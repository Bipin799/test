// theme/overrides/index.ts
import type { Components, Theme } from "@mui/material/styles";

import MuiCardHeader from "./cardHeader";
import MuiChip from "./chip";
import MuiIconButton from "./iconButton";
import MuiTablePagination from "./tablePagination";
import MuiTableCell from "./tableCell";
import MuiContainer from "./container";
import MuiTableRow from "./tableRow";

export default function components(theme: Theme): Components {
  return {
    MuiChip: MuiChip(theme),
    MuiIconButton: MuiIconButton(theme),
    MuiCardHeader: MuiCardHeader(theme),
    MuiTableCell: MuiTableCell(theme),
    MuiTablePagination: MuiTablePagination(theme),
    MuiContainer: MuiContainer(theme),
    MuiTableRow: MuiTableRow(theme),
  };
}
 