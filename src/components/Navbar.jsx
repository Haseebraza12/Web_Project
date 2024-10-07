import React from 'react';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <img src="Images\download (4).png" alt="Airbnb logo" className="mr-2" />
        <span className="text-2xl font-bold text-red-500">airbnb</span>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 font-medium">Stays</a>
        <a href="#" className="text-gray-700">Experiences</a>
        <a href="#" className="text-gray-700">Airbnb your home</a>
        <i className="fas fa-globe text-gray-700"></i>
        <i className="fas fa-bars text-gray-700"></i>
        <i className="fas fa-user-circle text-gray-700"></i>
      </nav>
    </header>
  );
};

export default Navbar;
