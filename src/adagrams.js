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
// helper function
const createLetterPool = (letterPool) => {
  let letterPoolList = [];
  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      letterPoolList.push(letter);
    }
  }
  return letterPoolList;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterPoolList = createLetterPool(letterPool);
  let currentHand = [];
  for (let i = 0; i < 10; i++) {
    let poolIndex = Math.floor(Math.random() * (letterPoolList.length - 1) + 1);
    let drawLetter = letterPoolList[poolIndex];
    currentHand.push(drawLetter);
    const index = letterPoolList.indexOf(drawLetter);
    letterPoolList.splice(index, 1);
  }

  return currentHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let handCopy = Object.assign(lettersInHand);
  for (let letter of input.toUpperCase()) {
    if (!handCopy.includes(letter)) {
      return false;
    } else {
      const index = handCopy.indexOf(letter);
      handCopy.splice(index, 1);
    }
  }
  console.log("false");
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let result = 0;
  const extraPoint = [7, 8, 9, 10];

  const values_obj = {
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

  for (let letter of word) {
    if (letter.match(/^[a-zA-Z]$/)) {
      result += values_obj[letter.toUpperCase()];
    } else {
      continue;
    }
  }
  if (extraPoint.includes(word.length)) {
    result += 8;
  }
  console.log(result);
  return result;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let wordScoreList = [];
  let highestScoringWords = [];
  let highScore = 0;

  for (let word of words) {
    wordScoreList.push(scoreWord(word));
    if (scoreWord(word) > highScore) {
      highScore = scoreWord(word);
    }
  }

  const scores = words.map((word) => scoreWord(word));
  const highScoreCount = words.reduce(
    (highScoreCount, score) =>
      highScore === score ? highScoreCount + 1 : highScoreCount,
    0
  );
  if (highScoreCount === 1) {
    let highScoreIndex = wordScoreList.indexOf(highScore);
    return { word: words[highScoreIndex], score: highScore };
  } else {
    for (let i = 0; i < wordScoreList.length; i++) {
      if (wordScoreList[i] === highScore) {
        if (words[i].length === 10) {
          return { word: words[i], score: highScore };
        } else {
          highestScoringWords.push(words[i]);
        }
      }
    }
    let shortestWordLength = 10;
    let shortestWord = "";

    for (let word of highestScoringWords) {
      if (word.length < shortestWordLength) {
        shortestWordLength = word.length;
        shortestWord = word;
      }
    }
    return { word: shortestWord, score: highScore };
  }
};

//Use for loops instead of reduce for highscoreFrom function
// count the num of time that word in wordscorelist equal to highScore
// let highScoreCount = 0;
// for (let score of wordScoreList) {
//   if (wordScoreList[words] === highScore) {
//     highScoreCount += 1;
//   }
// }
// let highScoreCount = 0;
// wordScoreList.forEach((score) => {
//   if (wordScoreList[words] === highScore) {
//     highScoreCount += 1;
//   }
// });
