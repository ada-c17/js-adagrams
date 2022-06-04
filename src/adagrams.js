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

// draw hand of 10 letters, with likelihood relative to that describe in LetterPool object
export const drawLetters = () => {
  let allLetters = [];
  let hand = [];
  //iterate through each object, add the letter (property) the # of times of its value in property:value pair
  // should I be doing a forEach loop instead?
  for (let letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      allLetters.push(letter);
    }
  }
  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * allLetters.length);
    // add to hand
    hand.push(allLetters[index]);
    // remove from available letters
    allLetters.splice(index, 1);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  lettersInHand = drawLetters(); //array of 10 letters
  //make input into array of strings
  let inputList = [];
  for (let letter in input) {
    inputList.push(letter);
  }
  // check if lettersInHand.includes(input)
  for (let letter of inputList) {
    if (lettersInHand.includes(letter)) {
      let index = lettersInHand.findIndex(letter); //find index of first occurance
      lettersInHand.splice(index, 1); //remove item from list
    } else {
      return false;
    }
    return true;
  }
};
//input: word (string); lettersInHand
// lettersInHand, the second parameter, describes an array of drawn letters in a hand.
// Returns either true or false
//Returns true if every letter in the input word is available (in the right quantities) in the lettersInHand
//Returns false if not; if there is a letter in input that is not present in the lettersInHand or has too much of compared to the lettersInHand

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
