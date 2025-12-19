import type { OrderStatus } from "../types/order";

export const statusChipColorMap: Record<
  OrderStatus,
  "pending" | "hold" | "complete" | "cancel"
> = {
  Pending: "pending",
  Hold: "hold",
  Complete: "complete",
  Cancel: "cancel",
};
