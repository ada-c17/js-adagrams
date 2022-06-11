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

const letterScore = {
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

// We want letters no matter what or how they are input to be uppercase.
const letters = Object.keys(LETTER_POOL);

// letterPool list and then append(push) for each letter in the letter_Pool into the list(array)
let letterPool = [];
letters.forEach(function (letter) {
  for (let i = 0; i < LETTER_POOL[letter]; i++) {
    letterPool.push(letter);
  }
});

export const drawLetters = () => {
  // Implement this method for wave 1
  // this will create an empty hand array and the newLetterPool will hold multiple values
  // we will then do a for loop to make sure it doesn't go past a length of 10. 
  // we need to use math.floor to make our random draw
  // then we need to push the newLetterpool into hand
  // return hand array
  let hand = [];
  let newLetterpool = [...letterPool];
  for (let i = 0; i < 10; i++) {
    let lengthLetterPool = newLetterpool.length;
    let i = Math.floor(lengthLetterPool * Math.random());
    hand.push(newLetterpool[i]);
    newLetterpool.splice(i, 1);
  }
  return hand;
};
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // This function takes in two params input and lettersInHand
  // create an input list, and also get length of input
  // create a for loop in which states that i is less than inputlenght
  // if empty must return 0
  const inputArray = input.split("");
  const inputLength = input.length;
  let letterInHand = [...lettersInHand];
  for (let i = 0; i < inputLength; i++) {
    let letter = inputArray[i];
    if (letterInHand.includes(letter)) {
      let j = letterInHand.indexOf(letter);
      letterInHand.splice(j, 1);
    } else {
      return false;
    }
  }
  return true;
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  const input = word.toUpperCase();
  const inputArray = input.split("");
  const inputLength = input.length;
  let score = 0;
  for (let i = 0; i < inputLength; i++) {
    let letter = inputArray[i];
    if (letters.includes(letter)) {
      score += letterScore[letter];
    }
  }
  if (inputLength > 6 && inputLength < 11) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  const lenWords = words.length;
  let winner = {
    word: "",
    score: 0,
  };

  for (let i = 0; i < lenWords; i++) {
    if (scoreWord(words[i]) > winner.score) {
      winner = {
        word: words[i],
        score: scoreWord(words[i]),
      };
    } else if (scoreWord(words[i]) === winner.score) {
      if (winner.word.length === 10) {
        winner = winner;
      } else if (words[i].length === 10) {
        winner = {
          word: words[i],
          score: scoreWord(words[i]),
        };
      } else if (words[i].length < winner.word.length) {
        winner = {
          word: words[i],
          score: scoreWord(words[i]),
        };
      }
    }
  }
  return winner;
};