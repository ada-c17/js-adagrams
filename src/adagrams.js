// A : 9	N : 6
// B : 2	O : 8
// C : 2	P : 2
// D : 4	Q : 1
// E : 12	R : 6
// F : 2	S : 4
// G : 3	T : 6
// H : 2	U : 4
// I : 9	V : 2
// J : 1	W : 2
// K : 1	X : 1
// L : 4	Y : 2
// M : 2	Z : 1

const LETTERBANK = [
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

const LETTERSCORES = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  const randNums = [];
  while (randNums.length < 10) {
    let num = Math.floor(Math.random() * 98);
    if (!randNums.includes(num)) {
      randNums.push(num);
    }
  }

  const letters = [];
  for (let index of randNums) {
    letters.push(LETTERBANK[index]);
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (let letter of input) {
    const index = lettersInHand.findIndex((i) => i === letter);
    if (index < 0) {
      return false;
    } else {
      lettersInHand.splice(index, 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  word = word.toUpperCase();
  // if (!word) {
  //   return score;
  // }
  for (let letter of word) {
    score += LETTERSCORES[letter];
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  // let highestScoreWord = {
  //   word: "",
  //   score: 0
  // }
  // for word in words
  // score word
  // if score higher replace highestScoreWord
  // if score equal
  // case: len word is 10 -- replace highestScoreWord
  // case: len highestScoreWord < 10 and len word < len highestScoreWord
  // otherwise do nothing
  // return highestScoreWord
};
