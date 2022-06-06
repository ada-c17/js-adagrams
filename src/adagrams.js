class Adagrams {
  constructor() {
    this.letterPool = {
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

    this.scoreChart = {
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
    this.handSize = 10;
    this.bonusScore = 8;
  }

  drawLetters() {
    let letterList = [];

    for (const key in this.letterPool) {
      letterList = letterList.concat(Array(this.letterPool[key]).fill(key));
    }
    // shuffle the array
    letterList.sort(() => Math.random() - 0.5);

    const output = letterList.slice(0, this.handSize);

    return output;
  }

  usesAvailableLetters(input, lettersInHand) {
    const inputUpper = input.toUpperCase();
    const lettersInHandCopy = [...lettersInHand];

    for (const letter of inputUpper) {
      if (lettersInHandCopy.includes(letter)) {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
      } else {
        return false;
      }
    }
    return true;
  }

  scoreWord(word) {
    let wordArr = word.toUpperCase().split("");
    let score = wordArr.reduce(
      (total, char) => total + this.scoreChart[char],
      0
    );

    if (word.length >= 7 && word.length <= 10) {
      score += this.bonusScore;
    }
    return score;
  }

  highestScoreFrom(words) {
    let maxScore = 0;
    let maxWord = null;

    for (let i = 0; i < words.length; i++) {
      const currentScore = this.scoreWord(words[i]);
      if (currentScore > maxScore) {
        maxScore = currentScore;
        maxWord = words[i];
      } else if (currentScore == maxScore && maxWord.length != 10) {
        if (words[i].length < maxWord.length || words[i].length == 10) {
          maxWord = words[i];
        }
      }
    }
    const result = {
      word: maxWord,
      score: maxScore,
    };

    return result;
  }
}

export default Adagrams;
