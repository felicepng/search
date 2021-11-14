import { useState, useEffect, useContext } from 'react';
import fetchSearchData from "../../data/search/fetchSearchData";
import SearchResultItem from './SearchResultItem';
import { AppContext } from '../../utils/AppContext';
import filteredSearch from '../../utils/search/filteredSearch';

const PAGE_LIMIT = 10;

const SearchResults = () => {
  const [searchData, setSearchData] = useState([]);
  const { searchQuery } = useContext(AppContext);

  const len = filteredSearch(searchData, searchQuery).length;

  useEffect(() => {
    fetchSearchData(setSearchData);
  }, [])

  return (
    <div className={`w-full lg:grid px-16 md:px-32 lg:px-40 py-8 md:py-9 ${searchQuery !== "" && len !== 0 && 'lg:grid-cols-3'}`}>
      <div className="col-span-2">
        {
          searchQuery !== "" &&
          <div>
            {/* assuming number of total results shown changes dynamically according to search query */}
            {
              len !== 0
                ?
                <div className="font-medium text-primary text-md md:text-lg mb-3">
                  Showing 1-{len < PAGE_LIMIT ? len : PAGE_LIMIT} of {len} result{len !== 1 && 's'}
                </div>
                :
                // if no search results, show placeholder
                searchQuery !== "" &&
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <img src="/search.png" className="w-52 h-52" />
                  <div className="text-gray-400 text-sm">No search results found</div>
                </div>
            }
            {
              filteredSearch(searchData, searchQuery)?.map(item => (
                <SearchResultItem key={item.DocumentId} title={item.DocumentTitle.Text} text={item.DocumentExcerpt.Text} highlights={item.DocumentExcerpt.Highlights} uri={item.DocumentURI} searchQuery={searchQuery} />
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default SearchResults;