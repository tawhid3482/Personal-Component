import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="dark:bg-gray-900  relative bg-gray-100 py-16 px-6 md:px-12 2xl:py-32 h-screen flex items-center mt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full dark:text-white">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left dark:text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight dark:text-white">
            Build Stunning UI with <br />
            <span className="text-gray-700 dark:text-[#F96F40]">Tailwind CSS</span>
          </h1>

          {/* Compatibility Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-6 text-gray-600 uppercase text-sm">
            <p className="font-medium dark:text-white">Compatible with:</p>
            <div className="flex items-center gap-2 bg-white shadow-md border border-gray-300 px-3 py-2 rounded-lg">
              <FaHtml5 className="text-orange-500 text-xl" />
              <span>HTML</span>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-md border border-gray-300 px-3 py-2 rounded-lg">
              <FaReact className="text-blue-500 text-xl" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-md border border-gray-300 px-3 py-2 rounded-lg">
              <SiTailwindcss className="text-cyan-500 text-xl" />
              <span>Tailwind</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed dark:text-white">
            A modern and customizable UI component library crafted with React and Tailwind CSS. 
            Enhance web development with a seamless, lightweight, and efficient design system.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link to={'/docs'}>
              <button className="bg-gray-800 hover:bg-[#F96F40] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ"
            alt="Component Library"
            className="max-w-md w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
