/* eslint-disable max-lines-per-function */
class BeerSong {
  static verse(line) {
    let verse;

    const BASE_VERSE =
      `${line} bottles of beer on the wall, ${line} bottles of beer.\n` +
      `Take one down and pass it around, ${line - 1} bottles of beer ` +
      'on the wall.\n';

    const TWO_BOTTLE_VERSE =
      '2 bottles of beer on the wall, 2 bottles of beer.\n' +
      'Take one down and pass it around, 1 bottle of beer ' +
      'on the wall.\n';

    const ONE_BOTTLE_VERSE =
      '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take it down and pass it around, no more bottles ' +
      'of beer on the wall.\n';

    const NO_BOTTLE_VERSE =
      'No more bottles of beer on the wall, no more ' +
      'bottles of beer.\nGo to the store and buy some ' +
      'more, 99 bottles of beer on the wall.\n';

    if (line > 2) {
      return BASE_VERSE;
    } else if (line === 2) {
      return TWO_BOTTLE_VERSE;
    } else if (line === 1) {
      return ONE_BOTTLE_VERSE;
    } else return NO_BOTTLE_VERSE;
  }

  static verses(start, end) {
    let text = '';

    while (start >= end) {
      text += BeerSong.verse(start);
      if (start !== end) {
        text += '\n';
      }

      start--;
    }

    return text;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;
