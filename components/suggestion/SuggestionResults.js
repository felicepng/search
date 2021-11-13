import { useState, useEffect, useContext } from 'react';
import boldSuggestion from '../../utils/boldSuggestion';
import fetchSuggestionData from '../../data/fetchSuggestionData';
import { AppContext } from '../../utils/AppContext';
import _ from 'lodash';

const SUGGESTION_LIMIT = 6;

const SuggestionResults = (props) => {
  const [suggestionData, setSuggestionData] = useState([]);
  const { searchInput, setSearchInput, setSearchQuery, setIsSuggestionVisible, setFilteredSuggestionLength, activeQuery, setActiveQuery } = useContext(AppContext);
  const { activeKey } = props;

  useEffect(() => {
    fetchSuggestionData(setSuggestionData);
  }, [])

  // update active query based on arrow keys
  useEffect(() => {
    setActiveQuery(filteredSuggestion.slice(0, SUGGESTION_LIMIT)[activeKey]);
  }, [activeKey])

  // filter suggestions based on suggestion limit
  const filteredSuggestion = _.filter(suggestionData?.suggestions, item => {
    return item.includes(searchInput.toLowerCase().trim());
  })

  useEffect(() => {
    setFilteredSuggestionLength(filteredSuggestion.length);
  }, [filteredSuggestion])

  return (
    <div className="bg-white shadow-md rounded-b-lg h-full w-full">
      {
        filteredSuggestion.slice(0, SUGGESTION_LIMIT).map((item, index) => (
          <div key={index} className={`px-5 py-2.5 hover:bg-gray-100 cursor-pointer ${index === activeKey && 'bg-gray-100'}`}
            onClick={() => {
              setSearchQuery(item);
              setSearchInput(item);
              setIsSuggestionVisible(false);
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: boldSuggestion(item, searchInput.toLowerCase().trim()) }} />
          </div>
        ))
      }
    </div>
  )
}

export default SuggestionResults;