// bold text in search results that matches query
const boldSearch = (str: string, indices: number[][]) => {
  let result: string = '';
  let count: number = 0;

  indices.forEach(index => {
    result += str.substring(count, index[0]);

    // replace with bold
    result += '<b>' + str.substring(index[0], index[1]) + '</b>';
    count = index[1];
  })

  result += str.substring(count, str.length);
  return result;
}

export default boldSearch;