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
  // Implement this method for wave 1
  let objCopy = (Object.assign = ({}, LETTER_POOL));
  const letters = [];
  while (letters.length < 10) {
    return objCopy(Math.floor(Math.random() * objCopy.length));
    objCopy["letter"]--;
  }
  if (objCopy["letter"] == 0) {
    objCopy.pop("letter");
  }
  return letters;
  // objCopy["letter"]--;
};

// while (letters.length < 10) {
//   const letter = Math.random(objCopy);

// letter = random.choice(list(letter_pool))
// letters.append(letter)
// print(len(letters), letters)

// letter_pool[letter]-=1

// if letter_pool[letter] == 0:
//     letter_pool.pop(letter)

// print (len(letter_pool), letter_pool)
// return letters

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
