class Octal {
  constructor(string) {
    this.number = string;
  }

  static BASE = 8;

  isInvalidNumber() {
    return this.number === undefined || this.number.match(/[^0-7]+/);
  }

  toDecimal() {
    if (this.isInvalidNumber()) return 0;

    const numberAsArray = [...this.number].map(string => Number(string));
    let startingPower = numberAsArray.length - 1;

    const convertedNumberArray = numberAsArray.map(number => {
      const convertedNumber = number * Octal.BASE ** startingPower;
      startingPower--;
      return convertedNumber;
    });

    return convertedNumberArray.reduce((sum, value) => sum + value, 0);
  }
}

module.exports = Octal;
