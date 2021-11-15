import _ from "lodash";

export const getSearchIndices = (excerpt, searchQuery) => {
  var searchTerms = searchQuery.split(" ");  // split into array in the case that search query has multiple words
  _.remove(searchTerms, searchTerm => { return searchTerm.length === 0 });  // remove empty string, in the case of multiple whitespaces
  searchTerms = _.reverse(_.sortBy(searchTerms, [o => { return o.length; }]));  // sort by descending length of search term

  const noSubstrings = [];  // create array to remove substrings of search terms

  searchTerms.map(searchTerm => {
    if (!noSubstrings.some(o => o.includes(searchTerm))) {
      noSubstrings.push(searchTerm);
    }
  });

  const indices = [];  // array to store start and end indices of each term

  noSubstrings.map(searchTerm => {
    // add start and end points to array for each search term
    indices.push([...excerpt.matchAll(new RegExp(searchTerm, 'gi'))].map(o => [o.index, o.index + searchTerm.length]));
  })

  const sorted = _.sortBy(_.flatten(indices), [o => { return o[0]; }]);  // flatten array by one level and sort by ascending index order

  // remove overlapping search term indices
  _.remove(sorted, (o, index) => {
    if (index !== 0 && o[0] < sorted[index - 1][1]) {
      return true;
    }
  })

  return sorted;
}

module.exports = getSearchIndices;