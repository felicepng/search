const filterSearch = require('../../utils/search/filterSearch');
import Search from '../../data/search/queryResult.json'

describe("Filter search", () => {
    const input = Search;

    it("should filter by lowercase", () => {
        expect(filterSearch(input, "child").length).toEqual(10);
    });

    it("should filter by uppercase", () => {
        expect(filterSearch(input, "CHILD").length).toEqual(10);
    });

    it("should ignore leading and trailing whitespaces", () => {
        expect(filterSearch(input, "  Child ").length).toEqual(10);
    });

    it("should filter for multiple words", () => {
        expect(filterSearch(input, "Child care").length).toEqual(3);
    });

    it("should filter correctly even for terms excluding child", () => {
        expect(filterSearch(input, "develop").length).toEqual(2);
    });
});