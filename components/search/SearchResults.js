import { useState, useEffect } from 'react';
import fetchSearchData from "../../data/fetchSearchData";
import SearchResultItem from './SearchResultItem';

const SearchResults = (props) => {
  const [searchData, setSearchData] = useState([]);
  const { searchQuery } = props;

  useEffect(() => {
    fetchSearchData(setSearchData);
  }, [])

  return (
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
                <SearchResultItem key={item.DocumentId} title={item.DocumentTitle.Text} text={item.DocumentExcerpt.Text} uri={item.DocumentURI} searchQuery={searchQuery} />
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default SearchResults;