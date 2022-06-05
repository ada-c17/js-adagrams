class Adagrams {
  constructor() {
    this.letterPool = [
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "B",
      "B",
      "C",
      "C",
      "D",
      "D",
      "D",
      "D",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "F",
      "F",
      "G",
      "G",
      "G",
      "H",
      "H",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "J",
      "K",
      "L",
      "L",
      "L",
      "L",
      "M",
      "M",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "P",
      "P",
      "Q",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "S",
      "S",
      "S",
      "S",
      "T",
      "T",
      "T",
      "T",
      "T",
      "T",
      "U",
      "U",
      "U",
      "U",
      "V",
      "V",
      "W",
      "W",
      "X",
      "Y",
      "Y",
      "Z",
    ];
  }
  drawLetters = () => {
    // Implement this method for wave 1
    // create a copy of letter pool so we don't alter original array
    const letterPoolCopy = [...this.letterPool];
    const drawnLetters = [];

    // until the length of drawnLetters is 10
    // keep generating a random index to remove from the pool
    // and add that element to drawnLetters
    while (drawnLetters.length < 10) {
      const randIndex = Math.floor(Math.random() * letterPoolCopy.length);
      drawnLetters.push(letterPoolCopy[randIndex]);
      letterPoolCopy.splice(randIndex, 1);
    }

    return drawnLetters;
  };

  usesAvailableLetters = (input, lettersInHand) => {
    // Implement this method for wave 2
    // create a copy of lettersInHand so we don't alter original array
    const lettersInHandCopy = [...lettersInHand];
    input = input.toUpperCase();
    let validInput = true;
    // check all letters in input are available in correct quantity
    for (const letter of input) {
      if (lettersInHandCopy.includes(letter) === false) {
        validInput = false;
      } else {
        lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
      }
    }
    return validInput;
  };

  scoreWord = (word) => {
    // Implement this method for wave 3
    const letterScores = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
    };

    let wordScore = 0;
    if (!word) {
      return 0;
    } else {
      word = word.toUpperCase();
      for (const letter of word) {
        wordScore += letterScores[letter];
      }
      if (word.length >= 7) {
        wordScore += 8;
      }
    }
    return wordScore;
  };

  highestScoreFrom = (words) => {
    // Implement this method for wave 1
    let bestWord = {
      word: "",
      score: 0,
    };
    for (const word of words) {
      let score = this.scoreWord(word);
      if (score > bestWord["score"]) {
        this.updateBestWord(bestWord, word, score);
        // check for ties using word length guidelines
      } else if (score === bestWord["score"]) {
        if (word.length === 10 && bestWord["word"].length !== 10) {
          this.updateBestWord(bestWord, word, score);
        } else if (
          word.length < bestWord["word"].length &&
          bestWord["word"].length !== 10
        ) {
          this.updateBestWord(bestWord, word, score);
        }
      }
    }
    return bestWord;
  };
  // helper method for highestScoreFrom
  updateBestWord = (bestWord, word, score) => {
    bestWord["word"] = word;
    bestWord["score"] = score;
    return bestWord;
  };
}
export default Adagrams;
