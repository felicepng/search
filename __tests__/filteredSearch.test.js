const filteredSearch = require('../utils/filteredSearch');
import Search from '../data/queryResult.json'

describe("Filter search", () => {
  const input = Search;

  it("should filter by lowercase", () => {
    expect(filteredSearch(input, "child").length).toEqual(10);
  });

  it("should filter by uppercase", () => {
    expect(filteredSearch(input, "CHILD").length).toEqual(10);
  });

  it("should filter despite leading and trailing whitespaces", () => {
    expect(filteredSearch(input, "  Child ca ").length).toEqual(2);
  });

  it("should filter correctly for terms excluding child", () => {
    expect(filteredSearch(input, "Vacc").length).toEqual(1);
  });
});