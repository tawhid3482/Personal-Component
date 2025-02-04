import { NavLink, Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "../Pages/Navbar/Navbar";

export const routes = [
  { path: "navbar", label: "Navbar" },
  { path: "banner", label: "Banner" },
  { path: "button", label: "Button" },
  { path: "card", label: "Card" },
  { path: "modal", label: "Modal" },
  { path: "accordion", label: "Accordion" },
  { path: "avatar", label: "Avatar" },
  { path: "carousel", label: "Carousel" },
  { path: "countdown", label: "Countdown" },
  { path: "stat", label: "Stat" },
  { path: "table", label: "Table" },
  { path: "timeline", label: "TimeLine" },
  { path: "loading", label: "Loading" },
  { path: "radial-progress", label: "Radial-progress" },
];

const LayoutDocs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchTerm } = useParams(); // Get search term from URL

  // Filter routes based on search input
  const filteredRoutes = routes.filter((route) =>
    searchTerm
      ? route.label.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex mt-16">
        {/* Sidebar */}

        <aside
          className={`fixed md:relative top-0 left-0 w-72 md:w-64 bg-gradient-to-br from-gray-100 dark:bg-gray-900 dark:text-white to-gray-300 shadow-xl transform transition-transform duration-300 
    ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0 z-50 h-screen`}
        >
          <button
            className="absolute top-4 right-4 text-black md:hidden hover:scale-110 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>

          {/* Sidebar Content with Scrollbar */}
          <div className="p-6 text-black dark:bg-gray-900 dark:text-white h-full overflow-y-auto">
            <h2 className="text-3xl font-semibold tracking-wide mb-6 text-[#F86F40]">
              T-I-S <br /> <span className="">Personal UI</span>
            </h2>

            {/* Display filtered routes */}
            <ul className="space-y-2 ">
              {filteredRoutes.length > 0 ? (
                filteredRoutes.map(({ path, label }) => (
                  <li key={path}>
                    <NavLink
                      to={`/docs/${path}`}
                      className={({ isActive }) =>
                        `block py-3 px-5 rounded-lg font-medium transition-all ${
                          isActive
                            ? "bg-white text-[#F0592A] shadow-md font-semibold"
                            : "hover:bg-white/20 hover:text-gray-200"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 dark:text-gray-400">
                  No results found
                </li>
              )}
            </ul>
          </div>
        </aside>

        {/* Mobile Menu Button */}
        <button
          className="fixed top-4 left-4 md:hidden bg-[#F0592A] text-white p-2 rounded-lg shadow-lg hover:scale-110 transition"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-2 bg-gray-300 text-gray-800 min-h-screen md:max-w-5xl 2xl:max-w-[1650px] h-screen overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutDocs;
