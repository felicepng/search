import { useContext } from 'react';
import { useRouter } from "next/router";
import { AppContext } from '../../utils/AppContext';
import boldSearch from '../../utils/boldSearch';
import _ from 'lodash';

const SearchResultItem = (props) => {
  const router = useRouter();
  const { title, text, highlights, uri } = props;
  const { searchQuery } = useContext(AppContext);

  return (
    (title.toLowerCase().includes(searchQuery.toLowerCase().trim()) || text.toLowerCase().includes(searchQuery.toLowerCase().trim())) &&
    <div className="w-full pt-4 pb-5">
      <div className="text-theme text-lg font-medium cursor-pointer hover:underline hover:text-blue-700"
        onClick={() => router.push(uri)}
      >
        {title}
      </div>
      <div className="text-secondary mt-2 leading-relaxed text-text">
        <span>1 Sep 2021 — </span>
        <span dangerouslySetInnerHTML={{ __html: boldSearch(text, highlights) }} />
      </div>
      <div className="text-tertiary text-uri font-light mt-3">
        {uri}
      </div>
    </div>
  )
}

export default SearchResultItem;