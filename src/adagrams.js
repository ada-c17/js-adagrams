export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPool = [
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

  const lettersInHand = [];
  for (let i = 0; i < 10; i++) {
    const idx = Math.floor(Math.random() * letterPool.length);
    const randomLetter = letterPool[idx];
    lettersInHand.push(randomLetter);
    letterPool.splice(idx, 1);
  }

  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const userInput = input.toUpperCase().split("");
  for (const letter of userInput) {
    if (lettersInHand.includes(letter)) {
      lettersInHand.splice(letter, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
