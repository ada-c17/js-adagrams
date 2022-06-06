import {
  LETTER_POOL,
  letterValue,
  generateLetters,
  getRandomLetter,
} from "helper";

class Adagrams {
  constructor(letterPool, letterValue) {
    this.letterPool = letterPool;
    this.letterValue = letterValue;
  }

  drawLetters() {
    let availableLetters = generateLetters(LETTER_POOL);
    let drawnLetters = [];
    for (let i = 0; i < 10; i++) {
      drawnLetters.push(getRandomLetter(availableLetters));
    }
    return drawnLetters;
  }

  usesAvailableLetters(input, lettersInHand) {
    for (let i = 0; i < input.length; i++) {
      if (!lettersInHand.includes(input[i])) {
        return false;
      }
      lettersInHand.splice(input[i], 1);
    }
    return true;
  }

  scoreWord(word) {
    let score = 0;
    const upper = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
      score += letterValue[upper[i]];
    }
    if (word.length >= 7) {
      score += 8;
    }
    return score;
  }

  highestScoreFrom(words) {
    let best = {
      word: words[0],
      score: 0,
    };
    for (let word of words) {
      let score = this.scoreWord(word);
      if (score > best.score) {
        best.score = score;
        best.word = word;
      } else if (score == best.score) {
        if (best.word.length == 10) {
          continue;
        } else if (word.length == 10) {
          best.score = score;
          best.word = word;
        } else if (word.length < best.word.length) {
          best.score = score;
          best.word = word;
        }
      }
    }
    return best;
  }
}

export default Adagrams;
