import { useRouter } from "next/router";
import boldSearchInput from "../../utils/boldSearchInput";

const SearchResultItem = (props) => {
  const router = useRouter();
  const { title, text, uri, searchQuery } = props;

  return (
    (title.includes(searchQuery.toLowerCase().trim()) || text.includes(searchQuery.toLowerCase().trim())) &&
    <div className="w-full pt-4 pb-5">
      <div className="text-theme text-lg font-medium cursor-pointer hover:underline hover:text-blue-700"
        onClick={() => router.push(uri)}
      >
        {title}
      </div>
      <div className="text-secondary mt-2 leading-relaxed text-text">
        <span>1 Sep 2021 — </span>
        <div dangerouslySetInnerHTML={{ __html: boldSearchInput(text, searchQuery.toLowerCase().trim()) }} />
      </div>
      <div className="text-tertiary text-uri font-light mt-3">
        {uri}
      </div>
    </div>
  )
}

export default SearchResultItem;