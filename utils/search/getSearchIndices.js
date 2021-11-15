import _ from "lodash";

export const getSearchIndices = (excerpt, searchQuery) => {
  var searchTerms = searchQuery.split(" ");  // split into array in the case that search query has multiple words
  _.remove(searchTerms, searchTerm => { return searchTerm.length === 0 });  // remove empty string, in the case of multiple whitespaces
  searchTerms = _.reverse(_.sortBy(searchTerms, [i => { return i.length; }]));  // sort by descending length of search term

  const noSubstrings = [];  // create array to remove substrings of search terms

  searchTerms.map(searchTerm => {
    if (!noSubstrings.some(i => i.includes(searchTerm))) {
      noSubstrings.push(searchTerm);
    }
  });

  const indices = [];  // array to store start and end indices of each term

  noSubstrings.map(searchTerm => {
    // add start and end points to array for each search term
    indices.push([...excerpt.matchAll(new RegExp(searchTerm, 'gi'))].map(i => [i.index, i.index + searchTerm.length]));
  })

  const flattened = _.flatten(indices);  // fllatten array by one level

  return _.sortBy(flattened, [i => { return i[0]; }]);  // sort array before returning
}

module.exports = getSearchIndices;