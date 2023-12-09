import React from 'react';

const NavBar = () => (
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;