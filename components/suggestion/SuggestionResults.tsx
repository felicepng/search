import { useState, useEffect, useContext } from "react";
import boldSuggestion from "../../utils/suggestion/boldSuggestion";
import fetchSuggestionData from "../../data/suggestion/fetchSuggestionData";
import { AppContext } from "../../utils/context/AppContext";
import filterSuggestion from "../../utils/suggestion/filterSuggestion";
import { SuggestionDataType } from "../../data/types"

const SUGGESTION_LIMIT: number = 6;

const SuggestionResults = () => {
    const [suggestionData, setSuggestionData] = useState<SuggestionDataType>();
    const { searchInput, setSearchInput, setSearchQuery, setFilteredSuggestionLength, setActiveQuery, activeKey, setIsSuggestionVisible } = useContext(AppContext);

    useEffect(() => {
        fetchSuggestionData(setSuggestionData);
    }, [])

    // update active query based on arrow keys
    useEffect(() => {
        setActiveQuery(filterSuggestion(suggestionData, searchInput).slice(0, SUGGESTION_LIMIT)[activeKey]);
    }, [activeKey])

    useEffect(() => {
        setFilteredSuggestionLength(filterSuggestion(suggestionData, searchInput).length);
    }, [filterSuggestion(suggestionData, searchInput)])

    return (
        <div className="bg-white shadow-md rounded-b-lg h-full w-full">
            {
                filterSuggestion(suggestionData, searchInput).slice(0, SUGGESTION_LIMIT).map((item: string, index: number) => (
                    <div key={index} className={`px-5 py-2.5 hover:bg-gray-100 cursor-pointer ${index === activeKey && "bg-gray-100"}`}
                        onClick={() => {
                            setSearchQuery(item);
                            setSearchInput(item);
                            setIsSuggestionVisible(false);
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: boldSuggestion(item, searchInput.toLowerCase().trim()) }} />
                    </div>
                ))
            }
        </div>
    )
}

export default SuggestionResults;