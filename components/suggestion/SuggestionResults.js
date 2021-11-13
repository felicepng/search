import { useState, useEffect, useContext } from 'react';
import boldSearchInput from '../../utils/boldSearchInput';
import fetchSuggestionData from '../../data/fetchSuggestionData';
import { AppContext } from '../../utils/AppContext';
import _ from 'lodash';

const SUGGESTION_LIMIT = 6;

const SuggestionResults = () => {
  const [suggestionData, setSuggestionData] = useState([]);
  const { searchInput, setSearchInput, setSearchQuery, setIsSuggestionVisible } = useContext(AppContext);

  useEffect(() => {
    fetchSuggestionData(setSuggestionData);
  }, [])

  // filter suggestions based on suggestion limit
  const filteredSuggestion = _.filter(suggestionData?.suggestions, item => {
    return item.includes(searchInput.toLowerCase().trim());
  })

  return (
    <div className="bg-white shadow-md rounded-b-lg h-full w-full">
      {
        filteredSuggestion.slice(0, SUGGESTION_LIMIT).map((item, index) => (
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