import { useState, useEffect, useContext } from 'react';
import fetchSearchData from "../../data/fetchSearchData";
import SearchResultItem from './SearchResultItem';
import { AppContext } from '../../utils/AppContext';
import _ from 'lodash';

const PAGE_LIMIT = 10;

const SearchResults = () => {
  const [searchData, setSearchData] = useState([]);
  const { searchQuery } = useContext(AppContext);

  const filteredSearch = _.filter(searchData?.ResultItems, item => {
    return item.DocumentTitle.Text.toLowerCase().includes(searchQuery.toLowerCase().trim()) || item.DocumentExcerpt.Text.toLowerCase().includes(searchQuery.toLowerCase().trim());
  })

  const len = filteredSearch.length;

  useEffect(() => {
    fetchSearchData(setSearchData);
  }, [])

  return (
    <div className="w-full grid grid-cols-3 px-40 py-9">
      <div className="col-span-2">
        {
          searchQuery !== "" &&
          <div>
            {/* assuming number of total results shown changes dynamically according to search query */}
            {
              len !== 0 &&
              <div className="font-medium text-primary text-lg mb-3">
                Showing 1-{len < PAGE_LIMIT ? len : PAGE_LIMIT} of {len} result{len !== 1 && 's'}
              </div>
            }
            {
              filteredSearch?.map(item => (
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