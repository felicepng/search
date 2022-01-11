import boldSearch from '../../utils/search/boldSearch';

interface Props {
  title: string;
  text: string;
  uri: string;
  searchQuery: string;
  indices: number[][];
}

const SearchResultItem = (props: Props) => {
  const {
    title,
    text,
    uri,
    indices
  } = props;

  return (
    <div className="search-result-item w-full pt-3 md:pt-4 pb-5">
      <a target="_blank" href={uri} className="text-theme text-base md:text-lg font-medium hover:underline hover:text-blue-700">
        {title}
      </a>
      <div className="text-secondary mt-2 leading-relaxed text-xs md:text-text">
        <span>1 Sep 2021 — </span>
        <span dangerouslySetInnerHTML={{ __html: boldSearch(text, indices) }} />
      </div>
      <div className="text-tertiary text-uri font-light mt-3 truncate">
        {uri}
      </div>
    </div>
  );
}

export default SearchResultItem;