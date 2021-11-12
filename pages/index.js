import Head from 'next/head'
import { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import SearchResult from '../components/SearchResult'
import axios from 'axios'

export default function Home() {
  const [searchData, setSearchData] = useState([]);
  const [suggestionData, setSuggestionData] = useState([]);

  const fetchSearchData = () => {
    return axios.get("https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json")
      .then((response) => {
        // console.log(response);
        const mySearchData = response.data;
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
    <div className="font-body flex flex-col items-center justify-center min-h-screen min-w-screen">
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="w-full grid grid-cols-3">
        <div className="col-span-2">
          {/* <Searchbar /> */}
          {
            <div className="px-36 font-semibold text-primary text-2xl">
              Showing 1 - {searchData?.PageSize} of {searchData?.TotalNumberOfResults} results
            </div>
          }
          {
            searchData?.ResultItems?.map(item => (
              <SearchResult key={item.DocumentId} title={item.DocumentTitle.Text} text={item.DocumentExcerpt.Text} uri={item.DocumentURI} />
            ))
          }
          {/* {suggestionData?.stemmedQueryTerm} */}
          {/* {
          suggestionData?.suggestions?.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        } */}
        </div>
      </div>
    </div>
  )
}
