/* eslint-disable max-lines-per-function */
class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(length) {
    if (length > this.digits.length) throw new Error(`'That's illegal!`);
    const results = [];

    for (
      let start = 0, end = length;
      start < this.digits.length && end <= this.digits.length;
      start++, end++
    ) {
      let slice = this.digits.slice(start, end);
      const result = [];
      [...slice].forEach(number => result.push(Number(number)));
      results.push(result);
    }

    return results;
  }
}

module.exports = Series;
