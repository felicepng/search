import { useState, useContext, useRef } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';
import SuggestionResults from '../suggestion/SuggestionResults';
import { AppContext } from '../../utils/AppContext';

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const { searchInput, setSearchInput, setSearchQuery, isSuggestionVisible, setIsSuggestionVisible } = useContext(AppContext);

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
      <div className="flex h-6 bg-header text-gray-500 items-center text-xxs pl-40">
        <img src="/logo.png" className="w-4 mr-1" />
        An Official Website of the <span className="font-semibold ml-1"> Singapore Government</span>
      </div>

      <div className="text-sm absolute z-50 flex flex-col w-full items-center px-40 pt-8"
        onClick={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className={`flex items-center justify-center h-11 w-full border rounded-lg ${focused ? 'border-theme' : 'border-gray-400'}`}>
          <div className="flex flex-col w-full justify-between items-center px-5">
            <div className="flex w-full items-center">
              <input ref={inputRef} placeholder="Search..." value={searchInput} className="py-0 focus:outline-none w-full h-full"
                onChange={e => setSearchInput(e.target.value)}
                onKeyPress={e => {
                  if (e.key === 'Enter') {
                    setSearchQuery(e.target.value);
                    setIsSuggestionVisible(false);
                  } else {
                    setIsSuggestionVisible(true);
                    // if (e.key === 'ArrowUp') {  // "up key"
                    //   console.log('Up');
                    // } else if (e.key === 'ArrowDown') {  // "down" key
                    //   console.log('Down');
                    // }
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
          searchInput.length > 2 && isSuggestionVisible &&
          <div className="flex items-center justify-center w-full">
            <SuggestionResults />
            <div className="w-36" />
          </div>
        }
      </div>

      <div className="bg-white shadow-search flex w-full items-center h-28 px-44" />
    </div>
  )
}

export default SearchBar;