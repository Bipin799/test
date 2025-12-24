import {
  Routes, Route,
  // createBrowserRouter
} from "react-router-dom";
import OrderList from "../views/orders/List";
import OrderDetails from "../views/orders/Details";
import { ButtonPage } from ".././views/components";
import { ChipPage } from ".././views/components";
import { TypographyPage } from ".././views/components";
import { ColorPage } from ".././views/components";
import { PaginationPage } from ".././views/components";
import { TextFieldPage } from ".././views/components";
import { CheckboxPage } from ".././views/components";
import RoutePage from "../views/routePage/route";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OrderList />} />
      <Route path="/details/:orderId" element={<OrderDetails />} />

      <Route path="/button" element={<ButtonPage />} />
      <Route path="/chip" element={<ChipPage />} />
      <Route path="/textfield" element={<TextFieldPage />} />
      <Route path="/color" element={<ColorPage />} />
      <Route path="/pagination" element={<PaginationPage />} />
      <Route path="/checkbox" element={<CheckboxPage />} />
      <Route path="/typography" element={<TypographyPage />} />
      <Route path="/route" element={<RoutePage />} />

    </Routes>
  );
}

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: OrderList,
//   },
//   {
//     path: "/details/:orderId",
//     Component: OrderDetails,
//   },

//   {
//     path: "/components",
//     children: [
//       { path: "button", Component: ButtonPage },
//       { path: "chip", Component: ChipPage },
//       { path: "textfield", Component: TextFieldPage },
//       { path: "color", Component: ColorPage },
//       { path: "pagination", Component: PaginationPage },
//       { path: "checkbox", Component: CheckboxPage },
//       { path: "typography", Component: TypographyPage },
//     ],
//   },

//   {
//     path: "/route",
//     Component: RoutePage,
//   },
// ]);