// bold search input in suggestion
const boldSuggestion = (suggestion: string, searchInput: string) => {
  return suggestion.replaceAll(searchInput, '<span style="font-weight:600">' + searchInput + '</span>');
}

export default boldSuggestion;