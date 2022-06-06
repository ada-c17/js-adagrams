import { letterPool, generateLetters, getRandomLetter } from "helper";

class Adagrams {
  constructor(letterPool) {
    this.letterPool = letterPool;
  }

  drawLetters() {
    let availableLetters = generateLetters(letterPool);
    let drawnLetters = [];
    for (let i = 0; i < 10; i++) {
      drawnLetters.push(getRandomLetter(availableLetters));
    }
    return drawnLetters;
  }

  usesAvailableLetters(input, lettersInHand) {
    const word = input.toUpperCase();
    const lettersInHandCopy = lettersInHand.slice();
    for (const letter of word) {
      if (!lettersInHandCopy.includes(letter)) {
        return false;
      }
      lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
    }
    return true;
  }

  scoreWord(word) {
    let score = 0;
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
      score += letterPool[word[i]].value;
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
