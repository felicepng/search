const filteredSuggestion = require('../../utils/suggestion/filteredSuggestion');
import Suggestion from '../../data/suggestion/suggestion.json'

describe("Filter suggestion", () => {
  const input = Suggestion;

  it("should filter by lowercase", () => {
    expect(filteredSuggestion(input, "child").length).toEqual(6);
  });

  it("should filter by uppercase", () => {
    expect(filteredSuggestion(input, "CHILD").length).toEqual(6);
  });

  it("should ignore leading and trailing whitespaces", () => {
    expect(filteredSuggestion(input, "  Child  ").length).toEqual(6);
  });

  it("should filter correctly even for terms excluding child", () => {
    expect(filteredSuggestion(input, "develop").length).toEqual(1);
  });
});