import { useState, useEffect, useContext } from 'react';
import boldSearchInput from '../../utils/boldSearchInput';
import fetchSuggestionData from '../../data/fetchSuggestionData';
import { AppContext } from '../../utils/AppContext';

const SuggestionResults = () => {
  const [suggestionData, setSuggestionData] = useState([]);
  const { searchInput, setSearchInput, setSearchQuery, setIsSuggestionVisible } = useContext(AppContext);

  useEffect(() => {
    fetchSuggestionData(setSuggestionData);
  }, [])

  return (
    <div className="bg-white shadow-md rounded-b-lg h-full w-full">
      {
        suggestionData?.suggestions?.map((item, index) => (
          item.includes(searchInput.toLowerCase().trim()) &&
          <div key={index} className="px-5 py-2.5 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setSearchQuery(item);
              setSearchInput(item);
              setIsSuggestionVisible(false);
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: boldSearchInput(item, searchInput.toLowerCase().trim()) }} />
          </div>
        ))
      }
    </div>
  )
}

export default SuggestionResults;