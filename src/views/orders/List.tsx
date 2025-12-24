import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";

import AddIcon from "@mui/icons-material/Add";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { useNavigate } from "react-router-dom";

import SearchInput from "../../components/orders/SearchInput";
import OrdersTable from "../../sections/orders/orderlist/table";
import { rows } from "../../utils/rows";
import type { Order } from "../../types/order";


export default function OrderList() {
  const navigate = useNavigate();

  const handleViewOrder = (orderId: Order["id"]) => {
    navigate(`/details/${orderId}`);
  };

  return (
    <Container maxWidth="lg">
    <Card>
      <CardHeader title="Order List" />
        <Divider />
      <CardContent>
        
        <Stack direction="row" justifyContent="space-between">
          <SearchInput />

          <Stack direction="row" gap={3}>
            <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
              Download
            </Button>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add New
            </Button>
          </Stack>
        </Stack>
        <OrdersTable rows={rows} onView={handleViewOrder} />
      </CardContent>

      <TablePagination
        component="div"
        count={rows.length}
        page={0}
        rowsPerPage={10}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        labelRowsPerPage="Items per page"
      />
    </Card>
    </Container>
  
  );
}
