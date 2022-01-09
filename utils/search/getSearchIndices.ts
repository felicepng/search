import _ from 'lodash';

export const getSearchIndices = (excerpt: string, searchQuery: string) => {
  // split into array in the case that search query has multiple words
  let searchTerms: string[] = searchQuery.split(' ');

  // remove empty string, in the case of multiple whitespaces
  _.remove(searchTerms, searchTerm => { return searchTerm.length === 0 });

  // sort by descending length of search term
  searchTerms = _.reverse(_.sortBy(searchTerms, [o => { return o.length; }]));

  // create array to remove substrings of search terms
  const noSubstrings: string[] = [];

  searchTerms.forEach((searchTerm: string) => {
    if (!noSubstrings.some(o => o.includes(searchTerm))) {
      noSubstrings.push(searchTerm);
    }
  });

  // array to store start and end indices of each term
  const indices: number[][][] = [];

  noSubstrings.forEach(searchTerm => {
    // add start and end points to array for each search term
    indices.push([...excerpt.matchAll(new RegExp(searchTerm, 'gi'))].map(o => [o.index, o.index + searchTerm.length]));
  })

  // flatten array by one level and sort by ascending index order
  const sorted = _.sortBy(_.flatten(indices), [o => { return o[0]; }]);

  // remove overlapping search term indices
  _.remove(sorted, (o, index) => {
    if (index !== 0 && o[0] < sorted[index - 1][1]) {
      return true;
    }
  });

  return sorted;
}

export default getSearchIndices;