const LETTER_POOL = [
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

export const drawLetters = () => {
  // shuffle LETTER_POOL array
  const shuffled = LETTER_POOL.sort(() => 0.5 - Math.random());
  // slice the first 10 letters of shuffled array to create hand
  let hand = shuffled.slice(0, 10);
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};

console.log(drawLetters());
