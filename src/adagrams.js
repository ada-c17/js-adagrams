const letterPool = {
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
  // Return a randomized list of ten letters
  let allLetters = [];
  let tenLetters = [];
  // if (letterPool.length === 0) {break};
  // console.log("letterPool: ", letterPool);
  for (const [key, value] of Object.entries(letterPool)) {
    // console.log("key:", key);
    for (let n = 0; n < value; n++) {
      allLetters.push(key);
      // console.log("key:", key);
    }
  }
  console.log("allLetters:", allLetters);
  let indexie = [];
  // let n = 0;
  while (indexie.length < 10) {
    // n++;
    let i = Math.floor(Math.random() * allLetters.length);
    // console.log("i: ", i);
    if (indexie.includes(i)) {
      continue;
    } else {
      indexie.push(i);
    }
  }
  indexie.forEach((k) => {
    return tenLetters.push(allLetters[k]);
  });
  // console.log("indexie:", indexie);
  // console.log("tenLetters:", tenLetters);
  return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = {
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
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
