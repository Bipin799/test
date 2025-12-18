export type OrderStatus =
  | "Pending"
  | "Hold"
  | "Complete"
  | "Cancel";

export interface Order {
  id: string;
  name: string;
  branch: string;
  payment: string;
  date: string;
  status: OrderStatus;
}
