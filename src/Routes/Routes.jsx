import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesConfig from "./routesConfig";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, childIndex) => (
              <Route key={childIndex} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
