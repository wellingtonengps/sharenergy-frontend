import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FormPage, LoginPage } from "../pages";

import HomePage from "../pages/HomePage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "createaccount/",
      element: <FormPage />,
    },
    {
      path: "home/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
