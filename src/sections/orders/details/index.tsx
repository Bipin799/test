import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import Details from "./detailtab";
import Invoice from "./Invoicetab";
import Status from "./statustab";

import { rows } from "../../../utils/rows";
import type { Order } from "../../../types/order";


export default function OrderDetailsPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [tab, setTab] = useState(0);

  const order: Order | undefined = rows.find(
    (item) => item.id === orderId
  );

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
    <Container maxWidth="lg">
      <Card>
        <CardContent>

          <Typography variant="h5" fontWeight={600} mb={2}>
            Order Details
          </Typography>

          <Tabs
            value={tab}
            onChange={(_, value) => setTab(value)}
            sx={{ mb: 3 }}
          >
            <Tab label="Details" />
            <Tab label="Invoice" />
            <Tab label="Status" />
          </Tabs>

          {/* Tab Content */}
          {tab === 0 && <Details order={order} />}
          {tab === 1 && <Invoice />}
          {tab === 2 && <Status />}

        </CardContent>
      </Card>
    </Container>
    </>
    
  );
}
