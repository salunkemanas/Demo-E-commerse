import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="mx-auto px-4 flex justify-between items-center py-3">
        {/* Hamburger Menu */}
        <button className="md:hidden mr-3" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Logo Section - hidden on mobile */}
        <div className="flex items-center md:flex hidden">
          <div className="text-3xl font-bold ml-3">Crane</div>
        </div>

        {/* Navigation Links - hidden on mobile */}
        <div className={`md:flex hidden items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#" className="text-gray-600 hover:text-gray-900">STATIONERY 123</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">WEDDING</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">BUSINESS</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">HOLIDAY</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">EVENTS</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">SYMPATHY</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">SALE</a>
        </div>

        {/* Search and Icons - only cart visible on mobile */}
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100 md:flex hidden">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 md:flex hidden">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h4l1.22 3H20a1 1 0 011 1v1a1 1 0 01-1 1H8.42l-1.4 3.6a1 1 0 00.9 1.4h9.63a1 1 0 110 2H9a1 1 0 01-1-1v-1a1 1 0 010-2h.62l1.72-4.44L8 4H4v2a1 1 0 11-2 0V3a1 1 0 011-1z" />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu - visible only on mobile */}
      {isMenuOpen && (
        
        <div className="flex">
          <div className="flex flex-col w-4/5 bg-blue-500 text-white">
            <div className="flex items-center border-2 border-white p-1">
              <input
                type="text"
                className="flex-grow p-2 text-sm focus:outline-none"
                placeholder="Search..."
              />
              <button className="p-2 hover:bg-blue-700">
                &#128269;
              </button>
            </div>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">STATIONERY 123</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">WEDDING</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">BUSINESS</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">HOLIDAY</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">EVENTS</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">SYMPATHY</a>
            <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">SALE</a>
          </div>
          <div className="w-1/5">

          </div>
        </div>

      )}
    </nav>
  );
};

export default Navbar;


