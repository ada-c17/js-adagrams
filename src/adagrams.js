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

export const drawLetters = () => {
  const listPool = []; // creating an empty list to store all the possible letters from dictionary

  for (const key in LETTER_POOL) {
    // looping over the object's keys to get access to its values
    let counter = 0;
    while (counter < LETTER_POOL[key]) {
      listPool.push(key.toUpperCase()); // adding key values times and moving to the next key
      counter++;
    }
  }

  let startingPoint = 0;
  const hand = [];

  while (startingPoint < 10) {
    const indexVariable = Math.floor(Math.random() * listPool.length); //randomly celecting the index of letter that was randomly generated
    const randomLetter = listPool[indexVariable]; //randomly generating a letter from my pool list

    hand.push(randomLetter); // adding randomly generated letter to a hand

    listPool.splice(indexVariable, 1); // ramoving that randomly generated letter from pool by remembering its index
    startingPoint++;
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter of input) {
    if (lettersInHand.includes(letter.toUpperCase())) {
      let index = lettersInHand.indexOf(letter.toUpperCase());
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  const list1Point = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  const list2Points = ["D", "G"];
  const list3Points = ["B", "C", "M", "P"];
  const list4Points = ["F", "H", "V", "W", "Y"];
  const list5Points = ["K"];
  const list8Points = ["J", "X"];
  const list10Points = ["Q", "Z"];

  let totalPoints = 0;

  for (const letter of word) {
    if (word.length === 0) {
      return 0;
    }

    if (list1Point.includes(letter.toUpperCase())) {
      totalPoints += 1;
    } else if (list2Points.includes(letter.toUpperCase())) {
      totalPoints += 2;
    } else if (list3Points.includes(letter.toUpperCase())) {
      totalPoints += 3;
    } else if (list4Points.includes(letter.toUpperCase())) {
      totalPoints += 4;
    } else if (list5Points.includes(letter.toUpperCase())) {
      totalPoints += 5;
    } else if (list8Points.includes(letter.toUpperCase())) {
      totalPoints += 8;
    } else if (list10Points.includes(letter.toUpperCase())) {
      totalPoints += 10;
    }
  }
  if (
    word.length === 7 ||
    word.length === 8 ||
    word.length === 9 ||
    word.length === 10
  ) {
    totalPoints += 8;
  }
  return totalPoints;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
