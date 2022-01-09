import Suggestion from '../../data/suggestion/suggestion.json';
import { SuggestionDataType } from '../../data/types';
import filterSuggestion from '../../utils/suggestion/filterSuggestion';

describe('Filter suggestion', () => {
  const input: SuggestionDataType = Suggestion;

  it('should filter by lowercase', () => {
    expect(filterSuggestion(input, 'child').length).toEqual(6);
  });

  it('should filter by uppercase', () => {
    expect(filterSuggestion(input, 'CHILD').length).toEqual(6);
  });

  it('should ignore leading and trailing whitespaces', () => {
    expect(filterSuggestion(input, '  Child  ').length).toEqual(6);
  });

  it('should filter correctly even for terms excluding child', () => {
    expect(filterSuggestion(input, 'develop').length).toEqual(1);
  });
});