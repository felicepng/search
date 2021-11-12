import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="z-50 sticky top-0 w-full">
      <div className="flex h-8 bg-header text-gray-500 items-center text-xs px-44">
        <img src="/logo.png" className="w-6 mr-2" />
        An Official Website of the <span className="font-semibold ml-1"> Singapore Government</span>
      </div>
      <div className="text-xl bg-white shadow-search h-40 px-44 py-12">
        <div className="flex justify-between h-full border rounded-lg border-gray-400">
          <input placeholder="Search..." className="focus:outline-none rounded-lg px-7 w-full" />
          <div className="font-medium cursor-pointer px-10 h-full flex items-center justify-center bg-theme hover:bg-blue-700 rounded-md text-white">
            <IoSearchSharp className="w-6 h-6 text-white mr-2" />
            Search
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;