import _ from 'lodash';

export const filterSearch = (searchData, searchQuery) => {
    // split into array in the case that search query has multiple words
    const searchTerms = searchQuery.split(" ");

    // check if every search term appears in either title or text
    return _.filter(searchData?.ResultItems, item => {
        return searchTerms.every(searchTerm => item.DocumentTitle.Text.toLowerCase().includes(searchTerm.toLowerCase().trim()) || item.DocumentExcerpt.Text.toLowerCase().includes(searchTerm.toLowerCase().trim()));
    })
}

module.exports = filterSearch;