const filteredSearch = require('../../utils/search/filteredSearch');
import Search from '../../data/search/queryResult.json'

describe("Filter search", () => {
  const input = Search;

  it("should filter by lowercase", () => {
    expect(filteredSearch(input, "child").length).toEqual(10);
  });

  it("should filter by uppercase", () => {
    expect(filteredSearch(input, "CHILD").length).toEqual(10);
  });

  it("should ignore leading and trailing whitespaces", () => {
    expect(filteredSearch(input, "  Child ").length).toEqual(10);
  });

  it("should filter for multiple words", () => {
    expect(filteredSearch(input, "Child care").length).toEqual(3);
  });

  it("should filter correctly even for terms excluding child", () => {
    expect(filteredSearch(input, "develop").length).toEqual(2);
  });
});