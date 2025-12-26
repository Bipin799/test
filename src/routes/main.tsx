// @react
import { createBrowserRouter } from "react-router-dom";

// @project
import AppLayout from "../layouts/AppLayout";
import { ButtonPage } from "../views/components";
import { CheckboxPage } from "../views/components";
import { ChipPage } from "../views/components";
import { ColorPage } from "../views/components";
import { PaginationPage } from "../views/components";
import { TextFieldPage } from "../views/components";
import { TypographyPage } from "../views/components";
import OrderDetails from "../views/orders/Details";
import OrderList from "../views/orders/List";
import RoutePage from "../views/routePage/route";

// ---------------------------------  ROUTES - MAIN  ---------------------------------

export const router = createBrowserRouter([
    {
      path: "/",
    element: <AppLayout />,  
    children: [
      { index: true, element: <OrderList /> },
      { path: "/details/:orderId", element: <OrderDetails /> },

      { path: "/component", element: <RoutePage /> },
      { path: "/component/button", element: <ButtonPage /> },
      { path: "/component/chip", element: <ChipPage /> },
      { path: "/component/textfield", element: <TextFieldPage /> },
      { path: "/component/color", element: <ColorPage /> },
      { path: "/component/pagination", element: <PaginationPage /> },
      { path: "/component/checkbox", element: <CheckboxPage /> },
      { path: "/component/typography", element: <TypographyPage /> },
    ],
  },
]);
