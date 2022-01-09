import { useState, createContext } from 'react';
export const AppContext = createContext<AppContextInterface | null>(null);

interface AppContextInterface {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  filteredSuggestionLength: number;
  setFilteredSuggestionLength: (filteredSuggestionLength: number) => void;
  activeQuery: string;
  setActiveQuery: (activeQuery: string) => void;
  activeKey: number;
  setActiveKey: (activeKey: number) => void;
  isSuggestionVisible: boolean;
  setIsSuggestionVisible: (isSuggestionVisible: boolean) => void;
}

export const AppProvider = props => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredSuggestionLength, setFilteredSuggestionLength] = useState<number>(0);
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [activeKey, setActiveKey] = useState<number>(-1);
  const [isSuggestionVisible, setIsSuggestionVisible] = useState<boolean>(false);

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