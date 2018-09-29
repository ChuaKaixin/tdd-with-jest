const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

// test cases
test("sum should exclude lowest and highest number", function() {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});

test("sum should exclude multiple instances of lowest and highest number", function() {
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
});

test("sum should be 0 if the array is empty of undefined", function() {
    expect(sumWithoutHighestAndLowest()).toEqual(0);
});

test("sum should be 0 if all numbers are the same.", function() {
    expect(sumWithoutHighestAndLowest([4,4,4,4])).toEqual(0);
});