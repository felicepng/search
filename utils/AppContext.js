import { useState, createContext } from 'react';
export const AppContext = createContext();

export const AppProvider = props => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryResults, setSearchQueryResults] = useState("");
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);
  const [filteredSuggestionLength, setFilteredSuggestionLength] = useState(0);
  const [activeQuery, setActiveQuery] = useState("");

  return (
    <AppContext.Provider value={{
      searchInput, setSearchInput,
      searchQuery, setSearchQuery,
      searchQueryResults, setSearchQueryResults,
      isSuggestionVisible, setIsSuggestionVisible,
      filteredSuggestionLength, setFilteredSuggestionLength,
      activeQuery, setActiveQuery
    }}>
      {props.children}
    </AppContext.Provider>
  )
}