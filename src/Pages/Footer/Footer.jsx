const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-white hover:text-gray-400 transition-colors duration-300">
            Personal Component
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Providing quality healthcare services with experienced professionals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-4 text-sm md:text-base">Madhupur, Tangail, Dhaka</p>
          <p className="text-sm md:text-base">Email: tawhidulislam3482@gmail.com</p>
          <p className="text-sm md:text-base">Phone: 01826853371, 01853505787</p>

          {/* Social Media */}
          <div className="flex space-x-6 mt-6">
            <a href="#" className="hover:text-gray-400 transition-all duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition-all duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition-all duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition-all duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center border-t border-gray-600 pt-6">
        <p className="text-sm md:text-base text-gray-400 opacity-70">
          &copy; 2025 TIS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
