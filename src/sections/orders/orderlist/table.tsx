import { useState } from "react";

// @mui
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import type { Order } from "../../../types/order";
import { statusChipColorMap } from "../../../constants/statusChip";
// import { palette } from "../../../theme/palette";
import theme from "../../../theme";


type OrdersTableProps = {
  rows: Order[];
  onView: (id: Order["id"]) => void;
};

// ---------------------------------  ORDERS - LIST  ---------------------------------

export default function OrdersTable({ rows, onView }: OrdersTableProps) {
  const [selected, setSelected] = useState<Order["id"][]>([]);

  
  const handleSelectRow = (id: Order["id"]) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow 
        >
          <TableCell padding="checkbox">
            <Checkbox
             />
          </TableCell>

          {[
            "ID",
            "Customer Name",
            "Branch",
            "Payment Type",
            "Order Date",
            "Status",
          ].map((title) => (
            <TableCell  key={title}>
              <TableSortLabel active direction="desc">
                {title}
              </TableSortLabel>
            </TableCell>
          ))}

          <TableCell align="center">Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => {
          const isSelected = selected.includes(row.id);

          return (
            <TableRow
              key={row.id}
              hover
              selected={isSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelected}
                  onChange={() => handleSelectRow(row.id)}
                />
              </TableCell>

              <TableCell sx={{ color: theme.palette.primary.main }}>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.branch}</TableCell>
              <TableCell>{row.payment}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={statusChipColorMap[row.status]}
                />
              </TableCell>

              <TableCell align="center">
                <IconButton color="primary" onClick={() => onView(row.id)}>
                  <VisibilityOutlinedIcon />
                </IconButton>
                <IconButton color="secondary" >
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>


    </Table>
  );
}
