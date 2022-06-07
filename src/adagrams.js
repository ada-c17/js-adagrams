const LETTER_DISTRIBUTION = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const SCORE_CHART = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

class Adagrams {
  static drawLetters = () => {
    let letters = [];
    let handOfLetters = [];

    for (const letter in LETTER_DISTRIBUTION) {
      for (let i = 0; i < LETTER_DISTRIBUTION[letter]; i++) {
        letters.push(letter);
      }
    }

    const shuffled = letters.sort(() => 0.5 - Math.random());
    handOfLetters = shuffled.slice(0, 10);

    return handOfLetters;
  };

  static usesAvailableLetters = (input, lettersInHand) => {
    for (const letter of input) {
      if (!lettersInHand.includes(letter)) {
        return false;
      } else {
        const index = lettersInHand.indexOf(letter);
        lettersInHand.splice(index, 1);
      }
    }
    return true;
  };

  static scoreWord = (word) => {
    let score = 0;

    if (word.length >= 7) {
      score += 8;
    }

    for (const letter of word) {
      score += Number(SCORE_CHART[letter.toUpperCase()]);
    }

    return score;
  };

  // In the case of tie in scores, use these tie-breaking rules:
  // prefer the word with the fewest letters...
  // ...unless one word has 10 letters. If the top score is tied between multiple words and one is 10 letters long, choose the one with 10 letters over the one with fewer tiles
  // If the there are multiple words that are the same score and the same length, pick the first one in the supplied list

  static highestScoreFrom = (words) => {
    let wordScores = [];

    for (const word of words) {
      const score = Adagrams.scoreWord(word);
      wordScores.push({ word, score });
    }

    let highest = {
      word: wordScores[0].word,
      score: wordScores[0].score,
    };

    for (const wordScore of wordScores) {
      if (wordScore.score > highest.score) {
        highest = { word: wordScore.word, score: wordScore.score };
      } else if (
        wordScore.score === highest.score &&
        wordScore.word.length === 10 &&
        highest.word.length !== 10
      ) {
        highest = { word: wordScore.word, score: wordScore.score };
      } else if (
        wordScore.score === highest.score &&
        wordScore.word.length < highest.word.length &&
        highest.word.length !== 10
      ) {
        highest = { word: wordScore.word, score: wordScore.score };
      }
    }

    return highest;
  };
}

export default Adagrams;
