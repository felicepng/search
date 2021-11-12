import { useRouter } from "next/router";

const SearchResult = (props) => {
  const router = useRouter();

  return (
    <div className="w-full pt-4 pb-5">
      <div className="text-theme text-lg font-medium cursor-pointer hover:underline hover:text-blue-700"
      onClick={() => router.push(props.uri)}
      >
        {props.title}
      </div>
      <div className="text-secondary mt-2 leading-relaxed text-text">
        <span>1 Sep 2021 — </span>
        {props.text}
      </div>
      <div className="text-tertiary text-uri font-light mt-3">
        {props.uri}
      </div>
    </div>
  )
}

export default SearchResult;