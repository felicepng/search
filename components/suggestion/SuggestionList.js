import { useState, useEffect } from 'react';
import axios from 'axios';
import boldSearchText from '../../utils/boldSearchText';

const SuggestionList = (props) => {
  const [suggestionData, setSuggestionData] = useState([]);
  const { searchText, setSearchText } = props;

  const fetchSuggestionData = () => {
    try {
      axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json")
        .then((response) => {
          const mySuggestionData = response.data;
          setSuggestionData(mySuggestionData);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchSuggestionData();
  }, [])

  return (
    <div className="bg-white shadow-md rounded-b-lg h-full w-full">
      {
        suggestionData?.suggestions?.map((item, index) => (
          item.includes(searchText.toLowerCase().trim()) &&
          <div key={index} className="px-5 py-2.5 hover:bg-gray-100 cursor-pointer"
            onClick={() => setSearchText(item)}
          >
            <div dangerouslySetInnerHTML={{ __html: boldSearchText(item, searchText.toLowerCase().trim()) }} />
          </div>
        ))
      }
    </div>
  )
}

export default SuggestionList;