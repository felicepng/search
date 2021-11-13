import _ from 'lodash';

export const filteredSearch = (searchData, searchQuery) => _.filter(searchData?.ResultItems, item => {
  return item.DocumentTitle.Text.toLowerCase().includes(searchQuery.toLowerCase().trim()) || item.DocumentExcerpt.Text.toLowerCase().includes(searchQuery.toLowerCase().trim());
})

module.exports = filteredSearch;