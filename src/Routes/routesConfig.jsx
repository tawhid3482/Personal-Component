import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Shared/ErorrPage";


const routesConfig = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home /> },
     
    ],
  },
];

export default routesConfig;
