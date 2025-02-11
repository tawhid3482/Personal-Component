import { useState } from "react";
import ComponentPreview from "../../ComponentPreview/ComponentPreview";
const buttonJSX = `
`;

const buttonHTML = `

`;

const NormalNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold">Navbar Components</h2>

      <ComponentPreview
        title="Normal Navbar"
        component={
          <div className="flex gap-4 items-center">
            <nav className="bg-white shadow-md ">
              <div className="w-full 2xl:w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-center">
                    <a href="#" className="text-xl font-bold text-gray-800">
                      MyLogo
                    </a>
                  </div>

                  {/* Navigation Links (Desktop) */}
                  <div className="hidden md:flex space-x-4 items-center">
                    <a
                      href="#"
                      className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </a>
                  </div>

                  {/* Button (Desktop) */}
                  <div className="hidden md:flex items-center">
                    <a
                      href="#"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Get Started
                    </a>
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="flex items-center md:hidden">
                    <button
                      type="button"
                      onClick={toggleMobileMenu}
                      className="text-gray-800 hover:text-gray-600 focus:outline-none"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu (Hidden by default) */}
              {isMobileMenuOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                      href="#"
                      className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="block bg-blue-500 text-white px-4 py-2 rounded-md text-base font-medium"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              )}
            </nav>
          </div>
        }
        code={buttonJSX}
        htmlCode={buttonHTML}
      />
    </div>
  );
};

export default NormalNav;
