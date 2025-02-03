import LayoutDocs from "../Layout/LayoutDocs";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import Button from "../Pages/Custom/Button/Button";


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
        path: "button",
        element: <Button />,
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
