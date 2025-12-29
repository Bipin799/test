// @types
import type { OrderStatus } from "@/types/order";

export const statusChipColorMap: Record<
  OrderStatus,
  "success" | "primary" | "warning" | "error"
> = {
  Pending: "warning",
  Hold: "primary",
  Complete: "success",
  Cancel: "error",
};
