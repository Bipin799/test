import { Chip } from "@mui/material";
import type { OrderStatus } from "../types/order";

interface StatusChipProps {
  label: OrderStatus;
}

const statusColors: Record<
  OrderStatus,
  { bg: string; color: string }
> = {
  Pending: { bg: "warning.lighter", color: "warning.dark" },
  Hold: { bg: "primary.lighter", color: "primary.dark" },
  Complete: { bg: "success.lighter", color: "success.dark" },
  Cancel: { bg: "error.lighter", color: "error.dark" },
};

export default function StatusChip({ label }: StatusChipProps) {
  const status = statusColors[label];

  return (
    <Chip
      label={label}
      sx={{
        fontWeight: 600,
        fontSize: "12px",
        bgcolor: status.bg,
        color: status.color,
        borderRadius: "50px",
        px: 1,
      }}
    />
  );
}
