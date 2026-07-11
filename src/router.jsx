import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Github from "./pages/Github";
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
        path: "Github",
        element: <Github />,
      },
      {
        path: "About",
        element: <About />,
      }
    ],
  },
]);
export default router;
