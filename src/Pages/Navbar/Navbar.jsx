import React, { useState, useEffect } from "react";
import stringSimilarity from "string-similarity";

import {
  FaGithub,
  FaLinkedin,
  FaRegMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import TIS from "../../assets/TIS.png";

import { useNavigate } from "react-router";
import { routes } from "../../Layout/LayoutDocs";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Function to handle search button click
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const routeLabels = routes?.map((route) => route.label.toLowerCase());
  
      // Using fuzzy matching with stringSimilarity
      const bestMatch = stringSimilarity.findBestMatch(searchTerm.toLowerCase(), routeLabels).bestMatch;
      
      // Increase the threshold for a better match (e.g., 0.3 for less strict matching)
      const threshold = 0.2;
  
      let matchedRoute = routes.find(route => route.label.toLowerCase() === bestMatch.target);
  
      if (matchedRoute && bestMatch.rating >= threshold) {
        navigate(`/docs/${matchedRoute.path}`);
      } else {
        // Handle cases where no good match is found
        // You can add a fallback route or simply navigate to a default route
        const fallbackRoute = routes.find(route => route.label.toLowerCase().includes(searchTerm.toLowerCase()));
        if (fallbackRoute) {
          navigate(`/docs/${fallbackRoute.path}`);
        } else {
          navigate(`/docs/${searchTerm.toLowerCase()}`); // Default navigation
        }
      }
  
      setSearchTerm("");
    }
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-3 px-6 md:px-12 flex justify-between items-center z-90">
      {/* Logo */}
      <div className="flex items-center">
        <img src={TIS} className="w-12 h-12 rounded-lg bg-black" alt="Logo" />
      </div>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1 border border-gray-300 dark:border-gray-700">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search components..."
          className="bg-transparent outline-none px-2 py-1 w-48 text-gray-700 dark:text-white"
        />
        <button   onClick={handleSearch} className="bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-[#F96F40] transition">
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
          href="https://github.com/tawhid3482"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-white hover:text-gray-600 transition"
        >
          <FaGithub size={22} />
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
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
    </nav>
  );
};

export default Navbar;
