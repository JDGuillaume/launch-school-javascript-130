/* eslint-disable max-lines-per-function */
class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const maxLength = 4;
    let convertedNumber = '';

    const numberAsArray = [...String(this.number)];
    const length = numberAsArray.length;

    let currentIndex = romanNumerals.length - 1 - (maxLength - length) * 2;

    numberAsArray.forEach(number => {
      switch (number) {
        case '1':
          convertedNumber += romanNumerals[currentIndex].repeat(1);
          break;
        case '2':
          convertedNumber += romanNumerals[currentIndex].repeat(2);
          break;
        case '3':
          convertedNumber += romanNumerals[currentIndex].repeat(3);
          break;
        case '4':
          convertedNumber +=
            romanNumerals[currentIndex] + romanNumerals[currentIndex + 1];
          break;
        case '5':
          convertedNumber += romanNumerals[currentIndex + 1];
          break;
        case '6':
          convertedNumber +=
            romanNumerals[currentIndex + 1] +
            romanNumerals[currentIndex].repeat(1);
          break;
        case '7':
          convertedNumber +=
            romanNumerals[currentIndex + 1] +
            romanNumerals[currentIndex].repeat(2);
          break;
        case '8':
          convertedNumber +=
            romanNumerals[currentIndex + 1] +
            romanNumerals[currentIndex].repeat(3);
          break;
        case '9':
          convertedNumber +=
            romanNumerals[currentIndex] + romanNumerals[currentIndex + 2];
          break;
        case '0':
          break;
      }

      currentIndex -= 2;
    });

    return convertedNumber;
  }
}

module.exports = RomanNumeral;
