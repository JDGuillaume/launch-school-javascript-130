const hammingDistance = require('../point-mutations');

describe('The Hamming Distance', () => {
  test('should be calculated for two strands of equal length', () => {
    expect(hammingDistance('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')).toBe(7);
  });

  test('should be calculated for two strands of different length using the shorter length', () => {
    expect(hammingDistance('GAGCCTACTAACGGGAT', 'CATCGTAATG')).toBe(5);
    expect(hammingDistance('GAGCCTACTA', 'CATCGTAATGACGGCCT')).toBe(5);
  });

  test('should be 0 if both strands are empty', () => {
    expect(hammingDistance('', '')).toBe(0);
  });

  test('should be 0 if both strands are the same', () => {
    expect(hammingDistance('DNA', 'DNA')).toBe(0);
  });

  test('should recognize differences in the last point (off-by-one)', () => {
    expect(hammingDistance('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCG')).toBe(8);
  });
});
