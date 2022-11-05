const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("return an array", () => {
        const arr = [2, 4, 2, 6, 4, 1];
        expect(Array.isArray(shuffleArray(arr))).toBe(true);
    })

    test("have all the same items", () => {
        const arr = [1, 2, 3];
        console.log(shuffleArray(arr));
        expect(shuffleArray(arr)).toEqual(expect.arrayContaining(arr));
    })

})