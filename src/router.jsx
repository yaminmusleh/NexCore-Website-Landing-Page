import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/About.jsx";
import Creation from "./components/creation/Creation.jsx";
import Documentation from "./pages/Documentation.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Creation",
        element: <Creation />,
      },
      {
        path: "Documentation",
        element: <Documentation />,
      },
    ],
  },
]);
export default router;
