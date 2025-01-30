import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Personal UI, crafted with <br /> <span className="text-blue-600 dark:text-blue-400">Tailwind CSS</span>
          </h1>

          {/* Compatibility Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-6 text-gray-700 dark:text-gray-300 uppercase text-sm">
            <p className="font-medium">Compatible with:</p>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg shadow-md">
              <FaHtml5 className="text-orange-500 text-xl" />
              <span>HTML</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg shadow-md">
              <FaReact className="text-blue-500 text-xl" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg shadow-md">
              <SiTailwindcss className="text-cyan-500 text-xl" />
              <span>Tailwind</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Personal Component Library created by Tawhidul Islam Saikat – A customizable and lightweight UI 
            component library built with React and Tailwind CSS, designed to enhance web development efficiency.
            This library offers a collection of reusable, responsive, and accessible components that seamlessly
            integrate with Tailwind, making UI development faster and more consistent.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300">
              Get Started
            </button>
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
