"use client";

export default function Footer() {
  return (
    <footer className="bg-[#181921] text-white py-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-4 sm:mb-0">
            <ul className="flex space-x-6">
              <li>
                <a className="hover:text-gray-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-sm opacity-75">© 2025, XYZ Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
