function hammingDistance(strand1, strand2) {
  const comparisonLength =
    strand1.length > strand2.length ? strand2.length : strand1.length;
  let diffCount = 0;

  for (let index = 0; index < comparisonLength; index++) {
    if (strand1[index] !== strand2[index]) diffCount++;
  }

  return diffCount;
}

module.exports = hammingDistance;
