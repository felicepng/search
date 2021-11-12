import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';
import SuggestionList from '../suggestion/SuggestionList';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="z-50 sticky top-0 w-full">
      <div className="flex h-5 bg-header text-gray-500 items-center text-xxs px-40">
        <img src="/logo.png" className="w-5 mr-2" />
        An Official Website of the <span className="font-semibold ml-1"> Singapore Government</span>
      </div>

      <div className="text-sm absolute z-50 flex flex-col w-full items-center px-40 pt-8">
        <div className={`flex items-center justify-center h-11 w-full border rounded-lg ${focused ? 'border-theme' : 'border-gray-400'}`}>
          <div className="flex flex-col w-full justify-between items-center px-5"
            onClick={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <div className="flex w-full items-center">
              <input placeholder="Search..." value={searchText} className="focus:outline-none rounded-lg w-full"
                onChange={e => setSearchText(e.target.value)}
              />
              {
                searchText !== "" &&
                <MdOutlineClear className="w-5 h-5 text-secondary hover:text-black cursor-pointer"
                  onClick={() => setSearchText("")}
                />
              }
            </div>
          </div>
          <div className="font-medium cursor-pointer w-36 h-full flex items-center justify-center bg-theme hover:bg-blue-700 rounded-md text-white">
            <IoSearchSharp className="w-5 h-5 text-white mr-2" />
            Search
          </div>
        </div>

        {
          searchText.length > 2 &&
          <div className="flex items-center justify-center w-full">
            <div className="bg-white shadow-md rounded-b-lg h-full pb-5 w-full">
              <SuggestionList />
            </div>
            <div className="w-36" />
          </div>
        }

      </div>

      <div className="bg-white shadow-search flex w-full items-center h-28 px-44" />
    </div>
  )
}

export default SearchBar;