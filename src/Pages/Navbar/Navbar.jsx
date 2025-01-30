import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaRegMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import TIS from "../../assets/TIS.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-3 px-6 md:px-12 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex w-18 items-center">
        <img src={TIS} className=" rounded-lg" alt="Logo" />
      </div>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1 border border-gray-300 dark:border-gray-700">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 py-1 w-48 text-gray-700 dark:text-white"
        />
        <button className="bg-[#514EEC] text-white px-4 py-1 rounded-lg hover:bg-[#3d3acc] transition">
          Search
        </button>
      </div>

      {/* Right Section: Social Links & Theme Toggle */}
      <div className="hidden md:flex gap-5 items-center">
        <a
          href="https://www.linkedin.com/in/tawhidul-islam-saikat-86b61a2a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-blue-600 transition"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-gray-600 transition"
        >
          <FaGithub size={22} />
        </a>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <FaSun size={20} /> : <FaRegMoon size={20} />}
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-gray-700 dark:text-white text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:hidden flex flex-col items-center py-4 space-y-4 z-10">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 dark:bg-gray-800 outline-none px-3 py-2 w-3/4 rounded-lg text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <button className="bg-[#514EEC] text-white px-4 py-2 rounded-lg hover:bg-[#3d3acc] transition">
            Search
          </button>
          <a
            href="https://www.linkedin.com/in/tawhidul-islam-saikat-86b61a2a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-white hover:text-blue-600 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-white hover:text-gray-600 transition"
          >
            <FaGithub size={24} />
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <FaSun size={24} /> : <FaRegMoon size={24} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
