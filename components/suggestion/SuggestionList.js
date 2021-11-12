import { useState, useEffect } from 'react';
import axios from 'axios';

const SuggestionList = () => {
  const [suggestionData, setSuggestionData] = useState([]);

  const fetchSuggestionData = () => {
    return axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json")
      .then((response) => {
        // console.log(response);
        const mySuggestionData = response.data;
        setSuggestionData(mySuggestionData);
      });
  };

  useEffect(() => {
    fetchSuggestionData();
  }, [])

  return (
    <div className="w-full h-full">
      {
        suggestionData?.suggestions?.map((item, index) => (
          <div key={index} className="px-7 pt-4">
            {item}
          </div>
        ))
      }
    </div>
  )
}

export default SuggestionList;