const filteredSuggestion = require('../utils/filteredSuggestion');
import Suggestion from '../data/suggestion.json'

describe("Filter suggestion", () => {
  const input = Suggestion;

  it("should filter by lowercase", () => {
    expect(filteredSuggestion(input, "child").length).toEqual(6);
  });

  it("should filter by uppercase", () => {
    expect(filteredSuggestion(input, "CHILD").length).toEqual(6);
  });

  it("should filter despite leading and trailing whitespaces", () => {
    expect(filteredSuggestion(input, "  Child  ").length).toEqual(6);
  });

  it("should filter correctly for terms excluding child", () => {
    expect(filteredSuggestion(input, "dev").length).toEqual(1);
  });
});