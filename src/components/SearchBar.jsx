import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center bg-white shadow-md rounded-full p-2 space-x-4">
        <div className="flex flex-col items-start">
          <span className="text-gray-500">Where</span>
          <input type="text" placeholder="Search destinations" className="outline-none" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-gray-500">Check in</span>
          <input type="text" placeholder="Add dates" className="outline-none" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-gray-500">Check out</span>
          <input type="text" placeholder="Add dates" className="outline-none" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-gray-500">Who</span>
          <input type="text" placeholder="Add guests" className="outline-none" />
        </div>
        <button className="bg-pink-500 text-white p-2 rounded-full">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
