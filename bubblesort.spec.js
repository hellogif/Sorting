describe('Bubble Sort', function () {
    let testArray;

    beforeEach(function () {
        testArray = [2, 53, 1, 0, 200, 75, 13]
    })

    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });

    it('returns a sorted array', function () {
        expect(bubbleSort(testArray)).toEqual([0, 1, 2, 13, 53, 75, 200])
    });

});

