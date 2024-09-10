import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="/kuddly-logo.svg" alt="Kuddly Logo" className="h-10" /> */}
          <span className="text-2xl text-orange font-bold  ml-4">kuddly</span>
        </div>

        {/* Full Menu - Visible only on md and larger screens */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-orange">
            Home
          </a>

          <a href="/shop" className="text-gray-600 hover:text-orange">
            Shop
          </a>
          <a
            href="/experience-center"
            className="text-gray-600 hover:text-orange"
          >
            Experience Center
          </a>
          <a href="/social" className="text-gray-600 hover:text-orange">
            Social
          </a>
          <a href="/contact-us" className="text-gray-600 hover:text-orange">
            Contact us
          </a>
          <a href="/login" className="text-gray-600 hover:text-orange">
            Login
          </a>
          <a href="/about-us" className="text-gray-600 hover:text-orange">
            About Us
          </a>
          <a href="/cart" className="text-gray-600 hover:text-orange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2-.6"
              />
            </svg>
          </a>
        </div>

        {/* Hamburger Menu Button - Visible on small screens */}
        <button
          className="block md:hidden px-4 py-2 rounded-md bg-orange text-white font-medium"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Dropdown Menu - Visible only when hamburger menu is toggled on small screens */}
      {isMenuOpen && (
        <div className="block md:hidden bg-white shadow-md">
          <a
            href="/"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            Home
          </a>

          <a
            href="/shop"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            Shop
          </a>
          <a
            href="/experience-center"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            Experience Center
          </a>
          <a
            href="/social"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            Social
          </a>
          <a
            href="/contact-us"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            Contact us
          </a>
          <a
            href="/login"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            Login
          </a>
          <a
            href="/about-us"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            About Us
          </a>
          <a
            href="/cart"
            className="block px-4 py-2 text-gray-600 hover:text-orange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2-.6"
              />
            </svg>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
