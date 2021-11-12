import { useRouter } from "next/router";

const SearchResult = (props) => {
  const router = useRouter();

  return (
    <div className="w-full py-7">
      <div className="text-theme text-2xl font-medium cursor-pointer hover:underline"
      onClick={() => router.push(props.uri)}
      >
        {props.title}
      </div>
      <div className="text-secondary mt-3 leading-relaxed">
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