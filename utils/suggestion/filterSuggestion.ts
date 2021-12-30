import _ from "lodash";
import { SuggestionDataType } from "../../data/types";

// filter suggestions based on search input
export const filterSuggestion = (suggestionData: SuggestionDataType, searchInput: string) => _.filter(suggestionData?.suggestions, (item: string) => {
    return item.toLowerCase().includes(searchInput.toLowerCase().trim());
})

export default filterSuggestion;