import { useState, useContext, useRef, useEffect } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';
import SuggestionResults from '../suggestion/SuggestionResults';
import { AppContext } from '../../utils/AppContext';
import useComponentVisible from '../../utils/useComponentVisible';

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const { searchInput, setSearchInput, setSearchQuery, isSuggestionVisible, setIsSuggestionVisible, filteredSuggestionLength, activeQuery } = useContext(AppContext);
  const [activeKey, setActiveKey] = useState(-1);
  const { ref, isComponentVisible } = useComponentVisible(true);

  // set cursor focus after clearing search
  const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
      setSearchInput("");
    }
    return [htmlElRef, setFocus]
  }

  const [inputRef, setInputFocus] = useFocus()

  return (
    <div className="z-50 sticky top-0 w-full">
      <div className="flex h-6 bg-header text-gray-500 items-center text-xxs pl-16 md:pl-32 lg:pl-40">
        <img src="/logo.png" className="w-4 mr-1" />
        An Official Website of the <span className="font-semibold ml-1"> Singapore Government</span>
      </div>

      <div ref={ref} className="text-sm absolute z-50 flex flex-col w-full items-center px-10 md:px-32 lg:px-40 pt-6 md:pt-8"
        onClick={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className={`md:scale-100 scale-90 flex items-center justify-center h-11 w-full border rounded-lg ${focused ? 'border-theme' : 'border-gray-400'}`}>
          <div className="flex flex-col w-full justify-between items-center px-5">
            <div className="flex w-full items-center">
              <input ref={inputRef} placeholder="Search..." value={searchInput} className="py-0 focus:outline-none w-full h-full"
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    if (activeKey !== -1) {  // if user is selecting option from suggestions using arrow keys
                      setSearchInput(activeQuery);
                      setSearchQuery(activeQuery);
                      setIsSuggestionVisible(false);
                      setActiveKey(-1);
                    } else {  // if user is querying for search input
                      setSearchQuery(e.target.value);
                      setIsSuggestionVisible(false);
                    }
                  } else {
                    setIsSuggestionVisible(true);
                    if (e.key === 'ArrowUp') {  // "up" key
                      setActiveKey(activeKey > 0 ? activeKey - 1 : 0);
                    } else if (e.key === 'ArrowDown') {  // "down" key
                      setActiveKey(activeKey < filteredSuggestionLength - 1 ? activeKey + 1 : filteredSuggestionLength - 1);
                    }
                  }
                }}
                onClick={() => setIsSuggestionVisible(true)}
              />
              {
                searchInput !== "" &&
                <MdOutlineClear className="w-5 h-5 text-secondary hover:text-black cursor-pointer"
                  onClick={setInputFocus}
                />
              }
            </div>
          </div>
          <div className="font-medium cursor-pointer w-36 h-full flex items-center justify-center bg-theme hover:bg-blue-700 rounded-md text-white"
            onClick={() => {
              setSearchQuery(searchInput);
              setIsSuggestionVisible(false);
            }}
          >
            <IoSearchSharp className="w-5 h-5 text-white mr-2" />
            Search
          </div>
        </div>

        {
          searchInput.length > 2 && isSuggestionVisible && isComponentVisible &&
          <div className="-mt-3 md:mt-0 scale-90 md:scale-100 flex items-center justify-center w-full">
            <SuggestionResults activeKey={activeKey} />
            <div className="w-36" />
          </div>
        }
      </div>

      <div className="bg-white shadow-search flex w-full items-center h-24 md:h-28 px-44" />
    </div>
  )
}

export default SearchBar;