import _ from 'lodash';

// filter suggestions based on suggestion limit
export const filteredSuggestion = (suggestionData, searchInput) => _.filter(suggestionData?.suggestions, item => {
  return item.toLowerCase().includes(searchInput.toLowerCase().trim());
})

module.exports = filteredSuggestion;