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

const scoresChart = {
  A: 1,
  C: 3,
  B: 3,
  E: 1,
  D: 2,
  G: 2,
  F: 4,
  I: 1,
  H: 4,
  K: 5,
  J: 8,
  M: 3,
  L: 1,
  O: 1,
  N: 1,
  Q: 10,
  P: 3,
  S: 1,
  R: 1,
  U: 1,
  T: 1,
  W: 4,
  V: 4,
  Y: 4,
  X: 8,
  Z: 10,
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let tenLetters = [];
  const letterPoolTwo = { ...letterPool };

  const letterPoolKeys = Object.keys(letterPool);

  // console.log(letterPool);
  // console.log(letterPoolTwo);
  while (tenLetters.length < 10) {
    let selection =
      letterPoolKeys[Math.floor(Math.random() * letterPoolKeys.length)];
    // console.log(selection);
    if (selection in letterPoolTwo) {
      letterPoolTwo[selection] -= 1;

      {
        if (letterPoolTwo[selection] < 1) {
          delete letterPoolTwo[selection];
        }
      }
      tenLetters.push(selection);
    }
  }
  return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let letterBankDict = {};
  let upperCase = input;
  let word = upperCase.toUpperCase();

  for (const letter of lettersInHand) {
    if (letter in letterBankDict) {
      letterBankDict[letter] += 1;
    } else {
      letterBankDict[letter] = 1;
    }
  }

  for (const char of word) {
    if (char in letterBankDict) {
      letterBankDict[char] -= 1;
      {
        if (letterBankDict[char] < 0) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let upperCase = word;
  let letters = upperCase.toUpperCase();

  let score = 0;

  for (const char of letters) {
    score += scoresChart[char];
  }
  if (letters.length >= 7 && letters.length < 11) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1

  let winningWordScore = { word: "", score: 0 };
  let highScoreWord = "";
  let score = 0;
  for (const word of words) {
    let wordScore = scoreWord(word);

    if (wordScore > score) {
      score = wordScore;
      highScoreWord = word;
      winningWordScore.word = highScoreWord;
      winningWordScore.score = score;
    } else if (wordScore === score) {
      if (highScoreWord.length === 10) {
        continue;
      } else if (word.length === 10) {
        highScoreWord = word;
        winningWordScore.word = highScoreWord;
      } else if (word.length < highScoreWord.length) {
        highScoreWord = word;
        winningWordScore.word = highScoreWord;
      }
    }
  }
  return winningWordScore;
};
