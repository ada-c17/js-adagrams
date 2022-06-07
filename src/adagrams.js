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

const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
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
  let finalScore = 0;
  const upperCase = word.toUpperCase();
  const length = upperCase.length;
  if (!word){
    finalScore = 0;
  };
  for (let letter of upperCase){
    finalScore += letterScores[letter];
  };
  if (7 <= length && length <= 10){
    finalScore += 8;
  };
  // if (length === 0){
  //   finalScore = 0;
  // };
  return finalScore
};  

// const Range = (start, stop) => {
//   //creating a range function for the tie breaker
//   if (stop === undefined){
//     stop = start;
//     start = 0;
//   };
//   if (start > stop){
//     return [];
//   };
//   return new Array(stop - start).fill(start).map((el, i) => el + i);
//   // for (let i =0; i < input; i++) {
//   // };
// };

export const tieBreaker = (maxScore) => {
  // let winningPair = ['', 0];
  // let smallestWordLen = 1000;

  // for (let num of Range(maxScore.length)){
  //   let word = maxScore[num][0];
  //   let score = maxScore[num][1];
  //   let length = word.length;
  //   if (length == 10){
  //     winningPair = [word, score]
  //     break
  //   } else if (length < smallestWordLen){
  //     smallestWordLen = length;
  //     winningPair = [word, score];
  //   };
  //   return winningPair
  // }
  let tie = new Set();
  let counter = 1000;
  let length = maxScore.length;
  // for (let i =0; i < input; i++) {
  // };
  for (let num = 0; num < length; i++){
    if (length === 10){
      tie.add(maxScore[num]);
      return tie;
    } else{
      if (counter === length){
        continue;
      } else{
        counter = length;
        tie.add(maxScore[num]);
      };
    };
  };
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let maxScore = [['', 0]];
  let scoreMap = {};

  for (const word of words){
    let wordScore = scoreWord(word);
    if (wordScore > maxScore[0][1]){
      maxScore = [[word, wordScore]];
      // maxScore.add([word, wordScore]);
    };
    if (maxScore.length > 1){
      let tie = tieBreaker(maxScore);
      scoreMap = {'word': word, 'score': tie};
    } else {
      let winnerList = [maxScore[0][0]];
      // winnerList.add(maxScore[0][0]);
      scoreMap = {'word': winnerList[0], 'score': wordScore};
    };
  };
  return scoreMap;
};  

