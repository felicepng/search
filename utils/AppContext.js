import { useState, createContext } from 'react';
export const AppContext = createContext();

export const AppProvider = props => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestionLength, setFilteredSuggestionLength] = useState(0);
  const [activeQuery, setActiveQuery] = useState("");
  const [activeKey, setActiveKey] = useState(-1);
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);

  return (
    <AppContext.Provider value={{
      searchInput, setSearchInput,
      searchQuery, setSearchQuery,
      filteredSuggestionLength, setFilteredSuggestionLength,
      activeQuery, setActiveQuery,
      activeKey, setActiveKey,
      isSuggestionVisible, setIsSuggestionVisible
    }}>
      {props.children}
    </AppContext.Provider>
  )
}