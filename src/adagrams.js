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
  let tenLetters = [];
  let pooledLetters = Object.assign({}, letterPool);
  while (tenLetters.length < 10) {
    let randomIndex = Math.floor(
      Math.random() * Object.keys(pooledLetters).length
    );
    let randomLetter = Object.keys(pooledLetters)[randomIndex];
    if (pooledLetters[randomLetter] > 0) {
      tenLetters.push(randomLetter);
      pooledLetters[randomLetter]--;
    }
  }
  return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterCount = 0;
  let letterCopy = [...lettersInHand];
  for (let i = 0; i < input.length; i++) {
    if (letterCopy.includes(input[i].toUpperCase())) {
      letterCopy.splice(input[i], 1);
      // why letterCopy.splice(i, 1); not working but input[i]?
      letterCount++;
    }
  }
  return letterCount == input.length;
};

// export const scoreWord = (word) => {
//   let score = 0;
//   // let words = Object.keys(word).toUpperCase();
//   if (word.length >= 7) {
//     score = 8;
//   }
//   for (let i = 0; i < word.length; i++) {
//     // let upper = word[i].toUpperCase();
//     Object.keys(scoreDict) == upper[i];
//     score += Object.values(scoreDict[i]);
//   }
//   return score;
// };
export const scoreWord = (word) => {
  let score = 0;
  word = word.toUpperCase();

  if (word.length >= 7) {
    score = 8;
  }
  for (let letter of word) {
    score += scoreDict[letter];
  }
  return score;
};
export const highestScoreFrom = (words) => {
  let highScore = 0;
  let bestWord = '';
  for (let word of words) {
    let score = scoreWord(word);
    if (score > highScore) {
      highScore = score;
      bestWord = word;
    } else if (score === highScore) {
      if (word.length >= 10 && word.length !== bestWord.length) {
        highScore = score;
        bestWord = word;
      } else if (word.length < bestWord.length && bestWord.length !== 10) {
        highScore = score;
        bestWord = word;
      }
    }
  }
  return { word: bestWord, score: highScore };
};
