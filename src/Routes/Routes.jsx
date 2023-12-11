import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
