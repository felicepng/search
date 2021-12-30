import _ from "lodash";

interface DataType {
    ResultItems: any[];
}

export const filterSearch = (searchData: DataType, searchQuery: string) => {
    // split into array in the case that search query has multiple words
    const searchTerms: string[] = searchQuery.split(" ");

    // check if every search term appears in either title or text
    return _.filter(searchData?.ResultItems, item => {
        return searchTerms.every((searchTerm: string) => item.DocumentTitle.Text.toLowerCase().includes(searchTerm.toLowerCase().trim()) || item.DocumentExcerpt.Text.toLowerCase().includes(searchTerm.toLowerCase().trim()));
    })
}

export { filterSearch as default };