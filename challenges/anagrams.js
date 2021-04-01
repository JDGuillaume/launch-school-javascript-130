/* eslint-disable max-lines-per-function */
class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(potentialMatchesArray) {
    const matches = [];
    const word = this.word.toLowerCase();

    potentialMatchesArray.forEach(potentialMatch => {
      let match = true;

      if (potentialMatch.length !== word.length) match = false;
      if (potentialMatch.toLowerCase() === word) {
        match = false;
      }

      [...potentialMatch].forEach(letter => {
        const regex = new RegExp(`${letter}`, 'gi');
        const wordMatches = [...word.matchAll(regex)];
        const comparisonMatches = [...potentialMatch.matchAll(regex)];

        if (wordMatches.length !== comparisonMatches.length) match = false;
      });

      if (match) matches.push(potentialMatch);
    });

    return matches;
  }
}

module.exports = Anagram;
