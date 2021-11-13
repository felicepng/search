// bold substring in string
const boldSuggestion = (str, substr) => {
  return str.replaceAll(substr, '<span style="font-weight:600">' + substr + '</span>');
}

export default boldSuggestion;