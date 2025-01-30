import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="">
      {/* <Navbar></Navbar> */}
      <div className="dark:bg-slate-300 dark:text-black p-12">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
    );
};

export default MainLayout;