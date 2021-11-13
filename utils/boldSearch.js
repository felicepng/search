// bold text in search results that matches query
const boldSearch = (str, highlights) => {
  var result = "";
  var count = 0;

  highlights.map(highlight => {
    result += str.substring(count, highlight.BeginOffset);
    result += '<span style="font-weight:600">' + str.substring(highlight.BeginOffset, highlight.EndOffset) + '</span>';
    count = highlight.EndOffset;
  })

  result += str.substring(count, str.length);
  return result;
}

export default boldSearch;