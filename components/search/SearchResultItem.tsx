import { useRouter } from "next/router";
import boldSearch from "../../utils/search/boldSearch";

interface Props {
    title: string;
    text: string;
    uri: string;
    searchQuery: string;
    indices: number[][];
}

const SearchResultItem = (props: Props) => {
    const router = useRouter();
    const { title, text, uri, indices } = props;

    return (
        <div className="w-full pt-3 md:pt-4 pb-5">
            <div className="text-theme text-base md:text-lg font-medium cursor-pointer hover:underline hover:text-blue-700"
                onClick={() => router.push(uri)}
            >
                {title}
            </div>
            <div className="text-secondary mt-2 leading-relaxed text-xs md:text-text">
                <span>1 Sep 2021 — </span>
                <span dangerouslySetInnerHTML={{ __html: boldSearch(text, indices) }} />
            </div>
            <div className="text-tertiary text-uri font-light mt-3 truncate">
                {uri}
            </div>
        </div>
    )
}

export default SearchResultItem;