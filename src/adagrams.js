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
      listPool.push(key); // adding key values times and moving to the next key
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
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
