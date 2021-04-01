/* eslint-disable max-lines-per-function */
const Triangle = require('../triangles');

describe('A triangle', () => {
  test('is not valid if any of the sides is 0.', () => {
    expect(() => new Triangle(0, 1, 2)).toThrow();
    expect(() => new Triangle(1, 0, 2)).toThrow();
    expect(() => new Triangle(1, 2, 0)).toThrow();
  });

  test('is not valid if any of the sides are negative.', () => {
    expect(() => new Triangle(-1, 1, 2)).toThrow();
    expect(() => new Triangle(2, -1, 1)).toThrow();
    expect(() => new Triangle(1, 2, -1)).toThrow();
  });

  test('is not valid if the sum of the lengths of any two sides is not greater than or equal to the third side.', () => {
    expect(() => new Triangle(50, 1, 2)).toThrow();
    expect(() => new Triangle(1, 50, 2)).toThrow();
    expect(() => new Triangle(1, 2, 50)).toThrow();
  });

  test('is equilateral if all three sides are the same length.', () => {
    let triangle = new Triangle(3, 3, 3);
    expect(triangle.kind()).toBe('equilateral');
  });

  test('is isosceles if only two of three sides are equal.', () => {
    let triangle = new Triangle(3, 2, 2);
    let triangle2 = new Triangle(2, 3, 2);
    let triangle3 = new Triangle(2, 2, 3);

    expect(triangle.kind()).toBe('isosceles');
    expect(triangle2.kind()).toBe('isosceles');
    expect(triangle3.kind()).toBe('isosceles');
  });

  test('is scalene if all three sides are different.', () => {
    let triangle = new Triangle(1, 2, 3);
    expect(triangle.kind()).toBe('scalene');
  });

  test('can have side lengths less than 1.', () => {
    let triangle = new Triangle(0.4, 0.4, 0.3);
    expect(triangle.kind()).toBe('isosceles');
  });
});
