import Head from 'next/head';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';
import _ from 'lodash';
import { AppProvider }  from '../utils/AppContext';

export default function Home() {
  return (
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
  )
}
