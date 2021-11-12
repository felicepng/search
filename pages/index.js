import Head from 'next/head'
import { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import axios from 'axios'

export default function Home() {
  const [searchData, setSearchData] = useState([]);
  const [suggestionData, setSuggestionData] = useState([]);

  const fetchSearchData = () => {
    return axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json")
      .then((response) => {
        // console.log(response);
        const mySearchData = response.data.ResultItems;
        setSearchData(mySearchData);
      });
  };

  const fetchSuggestionData = () => {
    return axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/e026dab444155edf2f52122aefbb80347c68de86/suggestion.json")
      .then((response) => {
        // console.log(response);
        const mySuggestionData = response.data;
        setSuggestionData(mySuggestionData);
      });
  };

  useEffect(() => {
    fetchSearchData();
    fetchSuggestionData();
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1">
        {/* <Searchbar /> */}
        {
          searchData?.map(item => (
            <div key={item.DocumentId}>
              {item.DocumentTitle.Text}
              {item.DocumentExcerpt.Text}
              {item.DocumentURI}
            </div>
          ))
        }
        {/* {suggestionData?.stemmedQueryTerm} */}
        {/* {
          suggestionData?.suggestions?.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        } */}
      </main>
    </div>
  )
}
