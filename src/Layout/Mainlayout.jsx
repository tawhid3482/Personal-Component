import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="">
      <Navbar></Navbar>
      <div className="dark:bg-slate-300 dark:text-black ">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
    );
};

export default MainLayout;