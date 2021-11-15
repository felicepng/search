import _ from "lodash";

export const getSearchIndices = (excerpt, searchQuery) => {
  // split into array in the case that search query has multiple words
  var searchTerms = searchQuery.split(" ");

  // remove empty string, in the case of multiple whitespaces
  _.remove(searchTerms, searchTerm => { return searchTerm.length === 0 });
  
  const indices = [];

  searchTerms.map(searchTerm => {
    // add start and end points to array for each search term
    indices.push([...excerpt.matchAll(new RegExp(searchTerm, 'gi'))].map(i => [i.index, i.index + searchTerm.length]));
  })

  const flattened = _.flatten(indices);  // fllatten array by one level

  return _.sortBy(flattened, [i => { return i[0]; }]);  // sort array before returning
}

module.exports = getSearchIndices;