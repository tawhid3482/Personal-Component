import { Outlet } from "react-router";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="py-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
