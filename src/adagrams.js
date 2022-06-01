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
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
