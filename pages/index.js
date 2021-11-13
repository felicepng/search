import Head from 'next/head';
import { useEffect, useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import SearchResult from '../components/search/SearchResult';
import fetchSearchData from '../data/fetchSearchData';
import _ from 'lodash';

export default function Home() {
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchSearchData(setSearchData);
  }, [])

  return (
    <div className="font-body flex flex-col items-center justify-start min-h-screen min-w-screen">
      <Head>
        <title>Search</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} setSearchQuery={setSearchQuery} />

      <div className="w-full grid grid-cols-3 px-40 py-9">
        <div className="col-span-2">
          {
            searchQuery !== "" &&
            <div>
              <div className="font-medium text-primary text-lg mb-3">
                Showing 1-10 of {searchData?.ResultItems?.length} results
              </div>
              {
                searchData?.ResultItems?.map(item => (
                  <SearchResult key={item.DocumentId} title={item.DocumentTitle.Text} text={item.DocumentExcerpt.Text} uri={item.DocumentURI} searchQuery={searchQuery} />
                ))
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
