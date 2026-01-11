import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const navItems = [
    { id: 1, name: "About", href: "#" },
    { id: 2, name: "Skills", href: "#" },
    { id: 3, name: "Projects", href: "#" },
    { id: 4, name: "Education", href: "#" },
    { id: 5, name: "Certifications", href: "#" },
    { id: 6, name: "Contact", href: "#" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <header className={`fixed w-full top-0 z-50 shadow-sm shadow-gray-800 ${isDarkMode ? "bg-[var(--background-dark)] text-white" : "bg-white text-gray-800"} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
              alt="Logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium hover:text-blue-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <IoMoonSharp className="h-5 w-5" /> : <IoSunnySharp className="h-5 w-5" />}
            </button> 

            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;