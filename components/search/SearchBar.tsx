import {
  useContext,
  useRef,
  useState
} from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdOutlineClear } from 'react-icons/md';
import { AppContext } from '../../utils/context/AppContext';
import useComponentVisible from '../../utils/hooks/useComponentVisible';
import SuggestionResults from '../suggestion/SuggestionResults';

const SearchBar = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [prevSearchQuery, setPrevSearchQuery] = useState<string>('');
  const { ref, isComponentVisible } = useComponentVisible(true);
  const {
    searchInput,
    setSearchInput,
    setSearchQuery,
    filteredSuggestionLength,
    activeQuery,
    activeKey,
    setActiveKey,
    isSuggestionVisible,
    setIsSuggestionVisible
  } = useContext(AppContext);

  // set cursor focused after clearing search
  const useFocus = () => {
    const htmlElRef = useRef<HTMLElement>(null)
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
      setSearchInput('');
    }
    return [htmlElRef, setFocus]
  }

  const [inputRef, setInputFocus] = useFocus();
  const showSuggestionResults: boolean = searchInput.length > 2 && isSuggestionVisible && isComponentVisible;

  const onEnterKey = (e: KeyboardEvent) => {
    if (activeKey !== -1) {  // if user is selecting option from suggestion dropdown
      if (activeQuery) {
        setSearchInput(activeQuery);
        setSearchQuery(activeQuery);
        setPrevSearchQuery(activeQuery);
      } else {
        setSearchInput(prevSearchQuery);
        setSearchQuery(prevSearchQuery);
      }
      setActiveKey(-1);
    } else {  // if user is querying for search input
      setSearchQuery((e.target as HTMLInputElement).value);
    }
    setIsSuggestionVisible(false);
  }

  return (
    <div className="z-50 sticky top-0 w-full flex-none">
      <div className="flex h-6 bg-header text-gray-500 items-center text-xxs pl-10 md:pl-24 lg:pl-40">
        <img src="/logo.png" className="w-4 mr-1" />
        An Official Website of the <span className="font-semibold ml-1"> Singapore Government</span>
      </div>

      <div ref={ref} className="text-sm absolute z-50 flex flex-col w-full items-center px-6 md:px-24 lg:px-40 pt-6 md:pt-8"
        onClick={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <div className={`md:scale-100 scale-90 flex items-center justify-center h-11 w-full border rounded-lg ${showSuggestionResults && filteredSuggestionLength > 0 && 'rounded-bl-none'} ${focused ? 'border-theme' : 'border-gray-400'}`}>
          <div className="flex w-full items-center px-5">
            <input id="searchBox" ref={inputRef as any} placeholder="Search..." value={searchInput} className="py-0 focus:outline-none w-full h-full"
              onChange={e => setSearchInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  onEnterKey(e as any);
                } else {
                  setIsSuggestionVisible(true);
                  if (e.key === 'ArrowUp') {  // 'up' key
                    setActiveKey(activeKey > 0 ? activeKey - 1 : 0);
                  } else if (e.key === 'ArrowDown') {  // 'down' key
                    setActiveKey(activeKey < filteredSuggestionLength - 1 ? activeKey + 1 : filteredSuggestionLength - 1);
                  }
                }
              }}
              onClick={() => setIsSuggestionVisible(true)}
            />
            {searchInput !== '' &&
              <MdOutlineClear id="clear-icon" className="w-5 h-5 text-secondary hover:text-black cursor-pointer"
                onClick={setInputFocus as any}
              />
            }
          </div>
          <button id="searchButton" className="font-medium w-20 md:w-36 h-full flex items-center justify-center bg-theme hover:bg-blue-700 rounded-md text-white"
            onClick={() => {
              setSearchQuery(searchInput);
              setIsSuggestionVisible(false);
            }}
          >
            <IoSearchSharp className="w-5 h-5 text-white md:mr-2" />
            <div className="hidden md:flex">Search</div>
          </button>
        </div>

        {showSuggestionResults &&
          <div className="-mt-3 md:mt-0 scale-90 md:scale-100 flex items-center justify-center w-full">
            <SuggestionResults />
            <div className="w-20 md:w-36" />
          </div>
        }
      </div>

      <div className="bg-white shadow-search flex w-full items-center h-24 md:h-28 px-44" />
    </div>
  );
}

export default SearchBar;