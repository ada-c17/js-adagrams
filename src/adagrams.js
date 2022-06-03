const poolHash = {
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

const scoreChart = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

export const drawLetters = () => {
  // Implement this method for wave 1

  const poolArr = [];
  for (let [letter, freq] of Object.entries(poolHash)) {
    //loops over poolHash
    for (let i = 0; i < freq; i++) {
      //while i is less than the frequencey of the letter
      poolArr.push(letter); //it appends that letter to poolArr
    } //it creates an array of the form [A,A,A,A,A,A,A,A,A,B.B.C,C,...]
  }

  const shufflePool = (poolArr) => {
    //https://javascript.info/task/shuffle//
    for (let i = poolArr.length - 1; i > 0; i--) {
      //assigns length of array minus one to i and while i is posititve it loops subrtracting one from i each iteration
      let j = Math.floor(Math.random() * (i + 1)); // math.random returns a value from 0-1, add 1 to i so we can caputre last index in poolArr, the result is a random number from 0-(len-1)
      [poolArr[i], poolArr[j]] = [poolArr[j], poolArr[i]]; //the two letters switch their index
    }
  };
  const draw = poolArr.slice(0, 10); //after shuffle the first 10 are returned
  return draw;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  const wordUp = input.toUpperCase();

  for (const letter of wordUp) {
    if (lettersInHand.includes(letter)) {
      //checking if letter from word in hand
      lettersInHand.splice(lettersInHand.indexOf(letter), 1); //using splice to remove that letter from hand
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;

  const wordUp = word.toUpperCase();

  if (wordUp.length >= 7) {
    score += 8;
  }

  for (const letter of wordUp) {
    for (const letterScore in scoreChart) {
      if (scoreChart[letterScore].includes(letter)) {
        //looking in the list value of that key to see if letter in list
        score += parseInt(letterScore); //the key is not an int so it needs to be converted before it is added
      }
    }
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
