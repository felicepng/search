import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';
import SuggestionList from '../suggestion/SuggestionList';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="z-50 sticky top-0 w-full">
      <div className="flex h-8 bg-header text-gray-500 items-center text-xs px-44">
        <img src="/logo.png" className="w-6 mr-2" />
        An Official Website of the <span className="font-semibold ml-1"> Singapore Government</span>
      </div>

      <div className="absolute z-50 text-lg flex flex-col w-full items-center px-44 pt-12">
        <div className={`flex items-center justify-center h-16 w-full border rounded-lg ${focused ? 'border-theme' : 'border-gray-400'}`}>
          <div className="flex flex-col w-full justify-between items-center px-7"
            onClick={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <div className="flex w-full">
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
          </div>
          <div className="font-medium cursor-pointer w-48 h-full flex items-center justify-center bg-theme hover:bg-blue-700 rounded-md text-white">
            <IoSearchSharp className="w-6 h-6 text-white mr-2" />
            Search
          </div>
        </div>

        {
          searchText.length > 2 &&
          <div className="flex items-center justify-center w-full">
            <div className="bg-white shadow-md rounded-b-lg h-full pb-5 w-full">
              <SuggestionList />
            </div>
            <div className="w-48" />
          </div>
        }

      </div>

      <div className="bg-white shadow-search flex w-full items-center h-40 px-44" />
    </div>
  )
}

export default SearchBar;