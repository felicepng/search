import _ from "lodash";

interface DataType {
    suggestions: string[];
}

// filter suggestions based on search input
export const filterSuggestion = (suggestionData: DataType, searchInput: string) => _.filter(suggestionData?.suggestions, (item: string) => {
    return item.toLowerCase().includes(searchInput.toLowerCase().trim());
})

export default filterSuggestion;