import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="z-50 sticky top-0 w-full">
      <div className="flex h-8 bg-header text-gray-500 items-center text-xs px-44">
        <img src="/logo.png" className="w-6 mr-2" />
        An Official Website of the <span className="font-semibold ml-1"> Singapore Government</span>
      </div>
      <div className="text-xl bg-white shadow-search h-40 px-44 py-12">
        <div className={`flex justify-between h-full border rounded-lg ${focused ? 'border-theme' : 'border-gray-400'}`}>
          <div className="flex w-full jusify-between items-center px-7"
            onClick={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <input placeholder="Search..." value={searchText} className="focus:outline-none rounded-lg w-full"
              onChange={e => setSearchText(e.target.value)}
            />
            {
              searchText !== "" &&
              <MdOutlineClear className="w-6 h-6 text-secondary hover:text-black cursor-pointer"
                onClick={() => setSearchText("")}
              />
            }
          </div>
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