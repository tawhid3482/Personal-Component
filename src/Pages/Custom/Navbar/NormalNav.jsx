import { useState } from "react";
import ComponentPreview from "../../ComponentPreview/ComponentPreview";

const buttonJSX = `
`;

const buttonHTML = `
<nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
  <div class="container mx-auto px-4 py-3 flex justify-between items-center">
    <a href="#" class="text-2xl font-bold text-blue-600">MyBrand</a>
    <button class="md:hidden text-gray-700 focus:outline-none">
      <!-- Mobile Menu Icon -->
    </button>
    <ul class="hidden md:flex space-x-6">
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Services</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
    </ul>
  </div>
</nav>
`;

const NormalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Navbar Components</h2>

      <ComponentPreview
        title="Normal Navbar"
        component={
          <div className="p-8 space-y-6">
            <div className="relative">
              <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                  <a href="#" className="text-2xl font-bold text-blue-600">
                    MyBrand
                  </a>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                  <ul className="hidden md:flex space-x-6">
                    <li>
                      <a href="#" className="text-gray-700 hover:text-blue-600">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-blue-600">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-blue-600">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-700 hover:text-blue-600">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        }
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default NormalNav;
