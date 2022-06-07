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

export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPoolArray = [];

  for (const [key, value] of Object.entries(letterPool)) {
    for (let i = 0; i < value; i++) {
      letterPoolArray.push(key);
    }
  }

  const tenRandomLetters = [];

  for (let i = 0; i < 10; i++) {
    const randomLetter =
      letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
    tenRandomLetters.push(randomLetter);

    const index = letterPoolArray.indexOf(randomLetter);
    letterPoolArray.splice(index, 1);
  }

  return tenRandomLetters;
};

// Helper function
const getLetterCount = (sequence) => {
  const frequencyDict = {};
  let count = 1;
  for (let i = 0; i < sequence.length; i++) {
    if (!frequencyDict.hasOwnProperty(sequence[i])) {
      frequencyDict[sequence[i]] = count;
    } else {
      frequencyDict[sequence[i]] += count;
    }
  }
  return frequencyDict;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const wordCountDictionary = getLetterCount(input);
  const letterBank = getLetterCount(lettersInHand);

  for (const [character, count] of Object.entries(wordCountDictionary)) {
    if (
      count > letterBank[character] ||
      !letterBank.hasOwnProperty(character)
    ) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (word.length === 0) {
    return 0;
  }

  let score = 0;

  for (let i = 0; i < word.length; i++) {
    let upperLetter = word[i].toUpperCase();
    if (scoreDict.hasOwnProperty(upperLetter)) {
      score += scoreDict[upperLetter];
    }
  }

  if ([7, 8, 9, 10].includes(word.length)) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4

  // set highest score to zero
  // set highest score word to null
  // create loop which iterating to word list
  // set new value currentScore with invoke scoreWord(word) function
  // create condition when a strictly better scored word found
  // set if statement if currentScore > highest score:
  // highest score equal currentScore
  // highest score word equal word
  // create condition when tie
  // elif currentScore equal highest score and  length of highest score word not equal 10
  // if length of word equal 10 or len word less than length of highest score word: highest score word equal word
  // create empty dictionary winner
  // add to dict key highest score word, highest score and values
  // return winner dict

  let highestScore = 0;
  let highestScoreWord = null;

  for (let i = 0; i < words.length; i++) {
    const currentScore = scoreWord(words[i]);

    // when a strictly better scored word found
    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestScoreWord = words[i];
    }
    // in case of tie
    else if (currentScore === highestScore && highestScoreWord.length !== 10) {
      if (words[i].length === 10 || words[i].length < highestScoreWord.length) {
        highestScoreWord = words[i];
      }
    }
  }
  const winnerDict = {};
  winnerDict["word"] = highestScoreWord;
  winnerDict["score"] = highestScore;

  return winnerDict;
};
