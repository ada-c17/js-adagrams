const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LETTER_POOL = {
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
    // Implement this method for wave 1
    const tenLetters = [];
    let letterPoolCopy = { ...LETTER_POOL };
    while (tenLetters.length < 10) {
      let randomLetter = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
      for (let [letter, count] of Object.entries(letterPoolCopy)) {
        if (randomLetter === letter && count !== 0) {
          letterPoolCopy[randomLetter] -= 1;
          tenLetters.push(randomLetter);
        }
      }
    }
    return tenLetters;
  }

  static usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
    const userInput = input.toUpperCase().split("");
    const isValid = userInput.every(
      (val) =>
        lettersInHand.includes(val) &&
        userInput.filter((el) => el === val).length <=
          lettersInHand.filter((el) => el === val).length
    );
    return isValid;
  }

  static scoreWord = (word) => {
    // Implement this method for wave 3
    let totalPoints = 0;

    const wordList = word.toUpperCase().split("");

    if (wordList.length >= 7) {
      totalPoints += 8;
    }

    wordList.forEach(sumUpPoints);
    function sumUpPoints(item) {
      if (item in SCORE_CHART) {
        totalPoints += SCORE_CHART[item];
      }
    }
    return totalPoints;
  }

  static highestScoreFrom = (words) => {
    // Implement this method for wave 4
    const wordsPoints = {};
    const tiedWords = [];
    let maxWord = "";

    words.forEach((element) => {
      wordsPoints[element] = Adagrams.scoreWord(element);
    });

    const highestScore = Math.max(...Object.values(wordsPoints));
    for (var word in wordsPoints) {
      if (wordsPoints[word] === highestScore) {
        tiedWords.push(word);
      }
    }

    for (let word of tiedWords) {
      if (word.length === 10) {
        maxWord = word;
        break;
      }
      maxWord = tiedWords.sort(
        (word1, word2) => word1.length - word2.length
      )[0];
    }

    return { word: maxWord, score: highestScore };
  }
}

export default Adagrams;
