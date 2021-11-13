import { useState, createContext } from 'react';
export const AppContext = createContext();

export const AppProvider = props => {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);

  return (
    <AppContext.Provider value={{
      searchInput, setSearchInput,
      searchQuery, setSearchQuery,
      isSuggestionVisible, setIsSuggestionVisible
    }}>
      {props.children}
    </AppContext.Provider>
  )
}