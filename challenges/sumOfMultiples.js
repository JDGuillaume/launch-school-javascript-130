class SumOfMultiples {
  constructor(...numbers) {
    this.numbers = numbers;
  }

  static to(limit) {
    const obj = new SumOfMultiples(3, 5);
    return obj.to(limit);
  }

  to(limit) {
    const multiples = [];

    this.numbers.forEach(number => {
      let multiple = number;

      while (multiple < limit) {
        if (!multiples.includes(multiple)) {
          multiples.push(multiple);
        }

        multiple += number;
      }
    });

    return multiples.reduce((sum, value) => sum + value, 0);
  }
}

module.exports = SumOfMultiples;
