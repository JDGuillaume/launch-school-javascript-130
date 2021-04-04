/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
class Diamond {
  static LETTERS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'X',
    'Y',
    'Z',
  ];

  static calculateBuffer(height) {
    return Math.floor(height / 2);
  }

  static calculateHeight(end) {
    return end * 2 + 1;
  }

  static findEnd(letter) {
    return Diamond.LETTERS.findIndex(item => item === letter);
  }

  static makeDiamond(letter) {
    const end = Diamond.findEnd(letter);
    const height = Diamond.calculateHeight(end);
    let buffer = Diamond.calculateBuffer(height);
    let diamond = '';

    let outerBuffer, innerBuffer;

    if (end >= 1) {
      outerBuffer = buffer - 1;
      innerBuffer = 1;
    }

    for (let index = 0; index <= end; index++) {
      if (index === 0) {
        diamond += `${' '.repeat(buffer)}A${' '.repeat(buffer)}` + '\n';
      } else {
        diamond +=
          `${' '.repeat(outerBuffer)}${Diamond.LETTERS[index]}${' '.repeat(
            innerBuffer
          )}${Diamond.LETTERS[index]}${' '.repeat(outerBuffer)}` + '\n';

        outerBuffer--;
        innerBuffer += 2;
      }
    }

    if (end >= 1) {
      outerBuffer += 2;
      innerBuffer -= 4;

      for (let index = end - 1; index >= 0; index--) {
        if (index === 0) {
          diamond += `${' '.repeat(buffer)}A${' '.repeat(buffer)}` + '\n';
        } else {
          diamond +=
            `${' '.repeat(outerBuffer)}${Diamond.LETTERS[index]}${' '.repeat(
              innerBuffer
            )}${Diamond.LETTERS[index]}${' '.repeat(outerBuffer)}` + '\n';

          outerBuffer++;
          innerBuffer -= 2;
        }
      }
    }

    return diamond;
  }

  makeBottomHalf() {}

  makeTopHalf() {}
}

module.exports = Diamond;
let answer = Diamond.makeDiamond('C');
console.log(answer);
let expected = '  A  \n' + ' B B \n' + 'C   C\n' + ' B B \n' + '  A  \n';
console.log(expected);
