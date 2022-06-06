"use strict";

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

const generateRandomLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}


export const drawLetters = () => {
  // Implement this method for wave 1
  let userHand = [];
  // make a deep copy of the letter pool
  let tempPool = JSON.parse(JSON.stringify(letterPool));

  while (userHand.length < 10){
    let letter = generateRandomLetter();
    let letterCount = tempPool[letter];
    if (letterCount == 0){
      continue;
    } else {
      tempPool[letter] -= 1;
      userHand.push(letter);
    }
  } return userHand;
};  

// const letterCounter = (input, lettersInHand) => {
//   let upperCase = input.toUpperCase();
//   let letterCount = 0;

//   for (let letter in upperCase){
//     for (let pos = 0; pos < upperCase.length; pos++){
//       if (upperCase.charAt(pos) == lettersInHand(letter)){
//         letterCount += 1;
//       };
//     } return letterCount;
//   };
// };

// const bankCounter = (input, lettersInHand) => {
//   let upperCase = input.toUpperCase();
//   let bankCount = 0;
//   for (let letter in upperCase){
//     for (let pos = 0; pos < upperCase.length; pos++){
//       if (upperCase.charAt(pos) == lettersInHand(letter)){
//         bankCount -= 1;
//       };
//     } return bankCount;
//   };
// };


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // for (const letter in input){
  //   for (letter in lettersInHand){
  //     // remove letter from input
  //     input.splice(0,1);
  //     // remove letter from letter in hand
  //     // is size/length of input is 0, then return true
  //     // if size/length of input is NOT zero, then return false
  //   }
  // } if (input.length === 0){
  //   return true;
  // }
  const letterMap = new Map();
  for (let letter of lettersInHand){
    if (letterMap.has(letter)){
      let currentCount = letterMap.get(letter);
      letterMap.set(letter, ++currentCount);
    } else {
      letterMap.set(letter, 1);
    };
    
  };
  for (let letter of input){
    if (!letterMap.has(letter)){
      return false;
    } else {
      let currentCount = letterMap.get(letter);
      if (currentCount == 0){
        return false;
      } else {
        letterMap.set(letter, --currentCount)
      };
    };
  };
  return true;
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
};  

export const tieBreaker = (maxScore) => {

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};  

