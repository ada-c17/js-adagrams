import Adagrams from "../adagrams";

const game = new Adagrams();

const Stub = {
  drawLetters() {
    const defaultLetters = ["H", "E", "L", "L", "O", "W", "O", "R", "L", "D"];

    if (typeof game.drawLetters === "function") {
      return game.drawLetters() || defaultLetters;
    }

    return defaultLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    if (typeof game.usesAvailableLetters === "function") {
      return game.usesAvailableLetters(input, lettersInHand);
    }

    return true;
  },

  scoreWord(word) {
    if (typeof game.scoreWord === "function") {
      return game.scoreWord(word);
    }

    return -1;
  },

  highestScoreFrom(words) {
    if (typeof game.highestScoreFrom === "function") {
      return game.highestScoreFrom(words);
    }

    if (words.length < 1) return null;

    return {
      word: words[0],
      score: Stub.scoreWord(words[0]),
    };
  },
};

export default Stub;
