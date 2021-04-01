class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static LETTER_VALUES = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10,
  };

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    if (!this.word) return 0;

    const wordArray = [...this.word.toLowerCase()];

    return wordArray
      .map(letter => {
        for (let group in Scrabble.LETTER_VALUES) {
          if (group.includes(letter)) {
            return Scrabble.LETTER_VALUES[group];
          }
          continue;
        }
        return 0;
      })
      .reduce((sum, value) => sum + value, 0);
  }
}

module.exports = Scrabble;
