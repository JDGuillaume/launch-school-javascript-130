/* eslint-disable max-lines-per-function */
class PerfectNumber {
  static classify(number) {
    if (PerfectNumber.isNegative(number)) {
      throw new Error('Negative numbers... are illegal!');
    }

    let start = number - 1;
    const divisors = [];

    while (start > 0) {
      if (number % start === 0) {
        divisors.push(start);
      }

      start--;
    }

    const result = divisors.reduce((sum, value) => sum + value, 0);

    if (result === number) {
      return 'perfect';
    } else if (result > number) {
      return 'abundant';
    } else return 'deficient';
  }

  static isNegative(number) {
    return number < 0;
  }
}

module.exports = PerfectNumber;
