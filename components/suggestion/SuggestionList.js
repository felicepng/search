import { useState, useEffect } from 'react';
import boldSearchInput from '../../utils/boldSearchInput';
import fetchSuggestionData from '../../data/fetchSuggestionData';

const SuggestionList = (props) => {
  const [suggestionData, setSuggestionData] = useState([]);
  const { searchInput, setSearchInput, setSearchQuery, setIsVisible } = props;

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
              setIsVisible(false);
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: boldSearchInput(item, searchInput.toLowerCase().trim()) }} />
          </div>
        ))
      }
    </div>
  )
}

export default SuggestionList;