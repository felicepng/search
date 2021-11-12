import { useRouter } from "next/router";

const SearchResult = (props) => {
  const router = useRouter();

  return (
    <div className="w-full py-8 hover:bg-gray-50 cursor-pointer px-32"
      onClick={() => router.push(props.uri)}
    >
      <div className="text-theme text-2xl font-semibold">
        {props.title}
      </div>
      <div className="text-secondary mt-3">
        <span>1 Sep 2021 — </span>
        {props.text}
      </div>
      <div className="text-tertiary text-sm font-light mt-4">
        {props.uri}
      </div>
    </div>
  )
}

export default SearchResult;