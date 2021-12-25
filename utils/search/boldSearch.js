// bold text in search results that matches query
const boldSearch = (str, indices) => {
    let result = "";
    let count = 0;

    indices.map(index => {
        result += str.substring(count, index[0]);
        result += "<b>" + str.substring(index[0], index[1]) + "</b>";  // replace with bold
        count = index[1];
    })

    result += str.substring(count, str.length);
    return result;
}

export default boldSearch;