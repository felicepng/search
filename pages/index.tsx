import { Spin } from 'antd';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';
import { AppProvider } from '../utils/context/AppContext';

export default function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded ?
      <AppProvider>
        <div className="font-body flex flex-col items-center justify-start min-h-screen min-w-screen">
          <Head>
            <title>Search</title>
            <link rel="icon" href="/logo.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
          </Head>

          <SearchBar />
          <SearchResults />
        </div>
      </AppProvider>
      :
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin />
      </div>
  );
}