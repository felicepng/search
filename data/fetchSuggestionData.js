import axios from "axios";

const fetchSuggestionData = (setSuggestionData) => {
  axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json")
    .then((response) => {
      const mySuggestionData = response.data;
      setSuggestionData(mySuggestionData);
    })
    .catch(e => console.log("Error in fetchSuggestionData: " + e));
};

export default fetchSuggestionData;