import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import LandingPage from "./pages/LandingPage";

import About from "./pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "About",
        element: <About />,
      }
    ],
  },
]);
export default router;
