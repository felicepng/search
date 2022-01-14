import {
  useContext,
  useEffect,
  useState
} from 'react';
import fetchSearchData from '../../data/search/fetchSearchData';
import { ResultItem, SearchDataType } from '../../data/types';
import { SEARCH_LIMIT } from '../../utils/constants/constants';
import { AppContext } from '../../utils/context/AppContext';
import filterSearch from '../../utils/search/filterSearch';
import getSearchIndices from '../../utils/search/getSearchIndices';
import SearchResultItem from './SearchResultItem';

const SearchResults = () => {
  const [searchData, setSearchData] = useState<SearchDataType>();
  const { searchQuery } = useContext(AppContext);
  const len: number = filterSearch(searchData, searchQuery).length;

  useEffect(() => {
    fetchSearchData(setSearchData);
  }, []);

  return (
    <div className={`w-full lg:grid px-12 md:px-24 lg:px-40 py-8 md:py-9 ${searchQuery !== '' && len !== 0 && 'lg:grid-cols-3'}`}>
      <div className="col-span-2">
        {
          searchQuery !== '' &&
          <div>
            {
              len !== 0
                ?
                <div className="font-medium text-primary text-md md:text-lg mb-3">
                  Showing 1-{len < SEARCH_LIMIT ? len : SEARCH_LIMIT} of {len} result{len !== 1 && 's'}
                </div>
                :
                // if no search results, show placeholder
                searchQuery !== '' &&
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <img src="/search.png" className="w-52 h-52" />
                  <div className="text-gray-400 text-sm">No search results found</div>
                </div>
            }
            {
              filterSearch(searchData, searchQuery)?.map((item: ResultItem, index: number) => (
                index < SEARCH_LIMIT && <SearchResultItem key={item.DocumentId} title={item.DocumentTitle.Text} text={item.DocumentExcerpt.Text} uri={item.DocumentURI} searchQuery={searchQuery} indices={getSearchIndices(item.DocumentExcerpt.Text, searchQuery)} />
              ))
            }
          </div>
        }
      </div>
    </div>
  );
}

export default SearchResults;