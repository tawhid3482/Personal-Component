import LayoutDocs from "../Layout/LayoutDocs";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import Button from "../Pages/Custom/Button/Button";
import Card from "../Pages/Custom/Card/Card";
import Banners from "../Pages/Custom/Banner/Banners";
import Navbar from "../Pages/Custom/Navbar/Navbar";


const routesConfig = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/docs",
    element: <LayoutDocs />,
    children: [
      {
        path: "navbar",
        element: <Navbar />,
      },
      {
        path: "banners",
        element: <Banners />,
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "card",
        element: <Card />,
      },
    ],
  },
  // 🔥 Catch-all (404) route
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routesConfig;
