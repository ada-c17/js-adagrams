export const letterPool = {
  A: { count: 9, value: 1 },
  B: { count: 2, value: 3 },
  C: { count: 2, value: 3 },
  D: { count: 4, value: 2 },
  E: { count: 12, value: 1 },
  F: { count: 2, value: 4 },
  G: { count: 3, value: 2 },
  H: { count: 2, value: 4 },
  I: { count: 9, value: 1 },
  J: { count: 1, value: 8 },
  K: { count: 1, value: 5 },
  L: { count: 4, value: 1 },
  M: { count: 2, value: 3 },
  N: { count: 6, value: 1 },
  O: { count: 8, value: 1 },
  P: { count: 2, value: 3 },
  Q: { count: 1, value: 10 },
  R: { count: 6, value: 1 },
  S: { count: 4, value: 1 },
  T: { count: 6, value: 1 },
  U: { count: 4, value: 1 },
  V: { count: 2, value: 4 },
  W: { count: 2, value: 4 },
  X: { count: 1, value: 8 },
  Y: { count: 2, value: 4 },
  Z: { count: 1, value: 10 },
};

// export const letterValue = {
//   A: 1,
//   B: 3,
//   C: 3,
//   D: 2,
//   E: 1,
//   F: 4,
//   G: 2,
//   H: 4,
//   I: 1,
//   J: 8,
//   K: 5,
//   L: 1,
//   M: 3,
//   N: 1,
//   O: 1,
//   P: 3,
//   Q: 10,
//   R: 1,
//   S: 1,
//   T: 1,
//   U: 1,
//   V: 4,
//   W: 4,
//   X: 8,
//   Y: 4,
//   Z: 10,
// };

// https://www.geeksforgeeks.org/object-entries-javascript/

export const generateLetters = (letterCount) => {
  let availableLetters = [];
  Object.entries(letterPool).forEach(([letter, data]) => {
    for (let i = 0; i < data.count; i++) {
      availableLetters.push(letter);
    }
  });
  return availableLetters;
};

export const getRandomLetter = (availableLetters) => {
  let randomIndex = Math.floor(availableLetters.length * Math.random());
  let randomLetter = availableLetters[randomIndex];
  availableLetters.splice(randomIndex, 1);
  return randomLetter;
};
