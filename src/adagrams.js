import letterData from "letterData";

class Adagrams {
  constructor() {
    this.letterData = letterData;
    this.handSize = 10;
    this.bonusSize = 7;
    this.bonusScore = 8;
  }

  drawLetters() {
    const lettersNotUsed = this.generateLetters();
    const lettersInHand = [];
    for (let i = 0; i < this.handSize; i++) {
      const randomIndex = ~~(Math.random() * lettersNotUsed.length);
      const randomLetter = lettersNotUsed.splice(randomIndex, 1)[0];
      lettersInHand.push(randomLetter);
    }
    return lettersInHand;
  }

  usesAvailableLetters(input, lettersInHand) {
    const lettersInHandCopy = [...lettersInHand];
    if (input.length > lettersInHandCopy.length) return false;
    for (const inputLetter of input) {
      const index = lettersInHandCopy.findIndex(
        (letter) => letter === inputLetter
      );
      if (index === -1) {
        return false;
      } else {
        lettersInHandCopy.splice(index, 1);
      }
    }
    return true;
  }

  scoreWord(word) {
    if (!word) return 0;
    const score = word
      .toUpperCase()
      .split("")
      .reduce((total, current) => total + this.letterData[current]["score"], 0);
    return word.length < this.bonusSize ? score : score + this.bonusScore;
  }

  highestScoreFrom(words) {
    const wordScores = words.map((word) => ({
      word: word,
      score: this.scoreWord(word),
    }));
    const highestScoredWord = wordScores.reduce((prev, current) => {
      if (prev.score > current.score) {
        return prev;
      } else if (prev.score == current.score) {
        if (prev.word.length === 10) {
          return prev;
        } else if (current.word.length === 10) {
          return current;
        } else if (prev.word.length <= current.word.length) {
          return prev;
        } else {
          return current;
        }
      } else {
        return current;
      }
    });
    return highestScoredWord;
  }

  generateLetters() {
    const availableLetters = [];
    Object.entries(this.letterData).forEach(([letter, data]) => {
      for (let i = 0; i < data.quantity; i++) {
        availableLetters.push(letter);
      }
    });
    return availableLetters;
  }
}

export default Adagrams;
