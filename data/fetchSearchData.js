import axios from "axios";

const fetchSearchData = (setSearchData) => {
  axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json")
    .then((response) => {
      const mySearchData = response.data;
      setSearchData(mySearchData);
    })
    .catch(e => console.log("Error in fetchSearchData: " + e));
};

export default fetchSearchData;