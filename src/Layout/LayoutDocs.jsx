import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const routes = [
  { path: "buttons", label: "Buttons", icon: "🔘" },
  { path: "yourBooking", label: "Your Booking", icon: "📅" },
  { path: "yourReservation", label: "Your Reservation", icon: "📍" },
  { path: "paymentHistory", label: "Payment History", icon: "💳" },
];

const LayoutDocs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex min-h-screen transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-72 bg-gradient-to-br from-[#F0592A] to-[#FF7F50] shadow-xl backdrop-blur-md md:translate-x-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-64 md:h-screen md:block z-50`}
      >
        {/* Close Button for Mobile */}
        <button className="absolute top-4 right-4 text-white md:hidden hover:scale-110 transition" onClick={() => setIsOpen(false)}>
          <FaTimes size={24} />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-semibold tracking-wide">Dashboard</h2>
          <button onClick={() => setDarkMode(!darkMode)} className="text-white bg-black/30 p-2 rounded-lg">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className="p-4 space-y-2">
          {routes.map(({ path, label, icon }) => (
            <li key={path}>
              <NavLink
                to={`/docs/${path}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3 px-5 rounded-lg font-medium transition-all ${
                    isActive ? "bg-white text-[#F0592A] shadow-md font-semibold" : "hover:bg-white/20 hover:text-gray-200"
                  }`
                }
              >
                <span className="text-lg">{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="fixed top-4 left-4 md:hidden bg-[#F0592A] text-white p-2 rounded-lg shadow-lg hover:scale-110 transition" onClick={() => setIsOpen(true)}>
        <FaBars size={24} />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDocs;
