const {data_sctucture, anagrams} = require('./TDD');

describe('data_sctucture', () => {
    beforeAll(() => {
        console.log('Test data_sctucture');
    });

    it('should return an object with the letters of the word as keys and the value 1 as value', () => {
        expect(data_sctucture("hello")).toEqual({"h": 1, "e": 1, "l": 1, "o": 1});
        expect(data_sctucture("hello")).not.toEqual({"h": 2, "e": 2, "l": 2, "o": 2});
        expect(data_sctucture("hello")).not.toEqual({"h": 1, "e": 1, "l": 1, "o": 1, "a": 1});
    });
});


describe('anagrams', () => {
    beforeAll(() => {
        console.log('Test anagrams');
    });
    it('should return true if the words are anagrams', () => {
        expect(anagrams("hello", "olleh")).toEqual(true);
        expect(anagrams("hello", "olleh")).not.toEqual(false);
    });
    it('should return false if the words are not anagrams', () => {
        expect(anagrams("hello", "hello")).not.toEqual(false);
        expect(anagrams("hello", "hello")).not.toEqual(false);
    });
}); 