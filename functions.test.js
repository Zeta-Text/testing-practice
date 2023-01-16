
const functions = require('./functions');

test('Adds 2 and 2  to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('capitalizes first letter', () => {
    expect(functions.capitalize("hello")).toBe("Hello");
});

test('subtract 2 number', () => {
    expect(functions.subtract(4, 2)).toBe(2);
});

test('divide 2 numbers', () => {
    expect(functions.divide(8, 4)).toBe(2);
});

test('multiply 2 numbers', () => {
    expect(functions.multiply(2, 2)).toBe(4);
});

test('caesar cipher', () => {
    expect(functions.caesarCipher('hello', 1)).toBe("ifmmp");
});

test('anaylze an array', () => {
    expect(functions.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});