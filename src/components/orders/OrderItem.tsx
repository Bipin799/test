import { Stack, Typography } from "@mui/material";

type OrderItemProps = {
  label: string;
  value: string;
};

const OrderItem = ({ label, value }: OrderItemProps) => (
  <>
  <Stack direction="row" spacing={1}>
    <Typography color="text.primary" variant="body1">
      {label} :
    </Typography>
    <Typography color = "text.secondary" variant="body1">{value}</Typography>
 </Stack>
  </>
  
);

export default OrderItem;
