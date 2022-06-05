class Adagrams {
  // constructor() {}

  static letterPool = {
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

  static scoreChart = {
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

  static drawLetters() {
    const res = [];
    const letterCopy = JSON.parse(JSON.stringify(this.letterPool)); // Deep Copy
    for (let i = 0; i < 10; i++) {
      let idx = Math.floor(
        Math.random() * (Object.keys(letterCopy).length - 1) // random index
      );
      let letter = Object.keys(letterCopy)[idx];
      res.push(letter); // O(1)
      letterCopy[letter]--;
      if (letterCopy[letter] === 0) {
        delete letterCopy[letter]; // O(1)
      }
    }
    return res;
  }

  static usesAvailableLetters(input, lettersInHand) {
    if (!input || input.length > 10) {
      return false;
    }

    const availableLetters = {};
    for (let letter of lettersInHand) {
      if (letter in availableLetters) {
        availableLetters[letter]++;
      } else {
        availableLetters[letter] = 1;
      }
    }

    for (let letter of input) {
      if (
        availableLetters[letter] === undefined ||
        availableLetters[letter] === 0
      ) {
        return false;
      } else {
        availableLetters[letter]--;
      }
    }
    return true;
  }

  static scoreWord(word) {
    let score = 0;
    word = word.toUpperCase();

    for (let letter of word) {
      score += this.scoreChart[letter];
    }

    if (word.length > 6) {
      score += 8;
    }

    return score;
  }

  static highestScoreFrom(words) {
    let bestWord = words.reduce((a, b) =>
      this.scoreWord(a) >= this.scoreWord(b) ? a : b
    );
    let bestScore = this.scoreWord(bestWord);

    const bestWords = words.filter(
      (word) => this.scoreWord(word) === bestScore
    );
    if (bestWords.length > 1) {
      const LengthTen = bestWords.find((word) => word.length === 10);
      if (LengthTen) {
        bestWord = LengthTen;
      } else {
        bestWord = words.reduce((a, b) => (a.length < b.length ? a : b));
      }
    } else {
      bestWord = bestWords[0];
    }

    return {
      word: bestWord,
      score: bestScore,
    };
  }
}

export default Adagrams;
