// bold search input in suggestion
const boldSuggestion = (suggestion, searchInput) => {
  return suggestion.replaceAll(searchInput, '<span style="font-weight:600">' + searchInput + '</span>');
}

export default boldSuggestion;