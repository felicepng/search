const SearchResult = (props) => {
  return (
    <div className="w-full py-10">
      <div className="text-blue-500 font-semibold">
        {props.title}
      </div>
      <div className="text-gray-500 text-sm">
        <span>1 Sep 2021 - </span>
        {props.text}
      </div>
      <div className="text-gray-400 text-xs">
        {props.uri}
      </div>
    </div>
  )
}

export default SearchResult;