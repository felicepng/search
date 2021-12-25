import axios from "axios";

const fetchSuggestionData = (setSuggestionData) => {
    axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json")
        .then((response) => {
            const mySuggestionData = response.data;
            setSuggestionData(mySuggestionData);
        })
        .catch(e => {
            if (e.response) {
                // request was made, server responded with a status code outside of 2xx
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(e.response.headers);
            } else if (e.request) {
                // request was made but no response received
                console.log(e.request);
            } else {
                // something happened in setting up the request that triggered an error
                console.log('Error', e.message);
                console.log("Error in fetchSuggestionData: " + e.message)
            }
            console.log(e.config);
        });
};

export default fetchSuggestionData;