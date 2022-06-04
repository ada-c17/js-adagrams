// import split from "core-js/fn/symbol/split";

// // const letterDistribution = {
// //   A: 9,
// //   B: 2,
// //   C: 2,
// //   D: 4,
// //   E: 12,
// //   F: 2,
// //   G: 3,
// //   H: 2,
// //   I: 9,
// //   J: 1,
// //   K: 1,
// //   L: 4,
// //   M: 2,
// //   N: 6,
// //   O: 8,
// //   P: 2,
// //   Q: 1,
// //   R: 6,
// //   S: 4,
// //   T: 6,
// //   U: 4,
// //   V: 2,
// //   W: 2,
// //   X: 1,
// //   Y: 2,
// //   Z: 1,
// // };

// // const buildArrayLetters = function (letterDistribution) {
// //   const lettersList = [];
// //   for (const letter in letterDistribution) {
// //     while (letterDistribution[letter] > 0) {
// //       lettersList.push(letter);
// //       letterDistribution[letter] = letterDistribution[letter] - 1;
// //     }
// //   }
// //   return lettersList;
// // };
// // console.log(letterDistribution);
// // console.log(buildArrayLetters(letterDistribution));
// // console.log(letterDistribution);

// const getRandom = function (listOfLetters) {
//   const randomLetters = []
//   for (let i = 0; i < 10; i++) {
//     let randomIndex = [Math.floor((Math.random()*listOfLetters.length))];
//     randomLetters.push(listOfLetters[randomIndex])
//     listOfLetters.splice(randomIndex, 1)
//   }
//   return randomLetters
// }

// // (get_random([[
// //   'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B',
// //   'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E',
// //   'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G',
// //   'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
// //   'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N',
// //   'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
// //   'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S',
// //   'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U',
// //   'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'
// // ]]))

// var list = [
//     'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B',
//     'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E',
//     'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G',
//     'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
//     'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N',
//     'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
//     'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S',
//     'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U',
//     'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'
//   ]
// console.log(getRandom(list))

// const usesAvailableLetters = (input, lettersInHand) => {
//   wordArray = input.split("");
//   console.log(wordArray);
//   for (let i = 0; i < wordArray.length; i++) {
//     if (lettersInHand.includes(wordArray[i]) === false) {
//       return false;
//     } else if (lettersInHand.includes(wordArray[i])) {
//       lettersInHand.splice(lettersInHand.indexOf(wordArray[i]));
//     }
//     return true;
//   }
// };

// const input = "HOLA";
// let lettersInHand = ["A", "H", "B", "E", "T", "G", "A", "L", "O", "A"];

// usesAvailableLetters(input, lettersInHand);

// const splitWord = function (word) {
//   const wordArray = word.split("");
//   return wordArray;
// };

// console.log(splitWord("hola como"));

const usesAvailableLetters = (input, lettersInHand) => {
  const wordArray = input.split("")
  for (let i = 0; i < wordArray.length; i++) {
    if (lettersInHand.includes(wordArray[i]) === false) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(wordArray[i]), 1);
    }
  }
  return true;
};

console.log (usesAvailableLetters("HOLA", [
  "A",
  "G",
  "B",
  "E",
  "T",
  "G",
  "A",
  "L",
  "O",
  "A",
]));
