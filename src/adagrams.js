import _ from "lodash";

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

const scoreDict = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  let tenLetters = [];
  // let letterPoolCopy = _.cloneDeep(letterPool);
  let letterPoolCopy = { ...letterPool };
  while (tenLetters.length !== 10) {
    // for (let i = 0; i < 10; ++i);
    // {
    const keys = Object.keys(letterPool);
    let randomLetter = keys[Math.floor(Math.random() * keys.length)];
    if (letterPoolCopy[randomLetter] > 0) {
      tenLetters.push(randomLetter);
      letterPoolCopy[randomLetter] -= 1;
    }
  }
  return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let letterCount = 0;
  const capInput = input.toUpperCase();

  for (let letter of capInput) {
    if (lettersInHand.includes(letter)) {
      let letterIndex = lettersInHand.indexOf(letter);
      lettersInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
//   let score = 0;
//   const capWord = word.toUpperCase();
//   if (word.length >= 7);
//   {
//     score = 8;
//   }
//   for (let letter of capWord);
//   {
//     score += scoreDict[letter];
//   }
//   return score;
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 1
//   let high_score = 0;
//   bestWord = None;

//   for (word of words){
//     let score = ???????????
//     if (score > highScore){
//       highScore = score
//       bestWord = word
//     }else if (score ==highScore){

//     }
//   }

// };

// def score_word(word):
//     score = 0
//     word = word.upper()
//     score_dict = {"A":1, "E":1, "I":1, "O":1, "U":1, "L":1, "N":1, "R":1, "S":1, "T":1,\
//          "D":2, "G":2, "B":3, "C":3, "M":3, "P":3, "F":4, "H":4, "V":4, "W":4, "Y":4, \
//              "K": 5, "J":8, "X":8, "Q":10, "Z":10}
//     if len(word) >= 7:
//         score = 8
//     for letter in word:
//         score_dict.keys() == letter
//         score += score_dict.get(letter)
//     return score

// def get_highest_word_score(word_list):
//     high_score = 0
//     best_word = None
//     for word in word_list:
//         score = score_word(word)
//         if score > high_score:
//             high_score = score
//             best_word = word
//         elif score == high_score:
//             if len(word) >= 10 and not len(word)==len(best_word):
//                 high_score = score
//                 best_word = word
//             elif len(word) < len(best_word) and not len(best_word)==10:
//                 high_score = score
//                 best_word = word
//     return  best_word, high_score
