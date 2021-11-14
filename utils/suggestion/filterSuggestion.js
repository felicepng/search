import _ from 'lodash';

// filter suggestions based on search input
export const filterSuggestion = (suggestionData, searchInput) => _.filter(suggestionData?.suggestions, item => {
  return item.toLowerCase().includes(searchInput.toLowerCase().trim());
})

module.exports = filterSuggestion;