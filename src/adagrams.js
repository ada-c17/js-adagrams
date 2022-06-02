// HELPER FUNCTIONS
export const countTimes = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export const drawLetters = () => {
  // Implement this method for wave 1
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

  let clone = JSON.parse(JSON.stringify(letterPool));
  let userHand = [];

  for (let i = 0; i < 10; i++) {
    const randNum = Math.floor(Math.random() * 26);
    const char = Object.keys(letterPool)[randNum];
    let letter_count = clone[char];

    if (letter_count === 0) {
      continue;
    } else {
      clone[char] -= 1;
      userHand.push(char);
    }
  }
  console.log(userHand);
  return userHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();
  
  for (const letter of input) {
      let rgxp = new RegExp(letter, "g");
      let letterCount = input.match(rgxp).length;
      let isFound = lettersInHand.includes(letter);
      if (isFound === true) {
          let bankCount = countTimes(lettersInHand, letter);
          if (letterCount <= bankCount) {
              continue ;
          } else {
              return false;
          }
      } else {
        return false;
  };
      
  };
  return true;
};

// export const scoreWord = (input) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 1
// };

