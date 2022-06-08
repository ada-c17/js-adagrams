export const drawLetters = () => {
  // Implement this method for wave 1
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);
  const letterList = {
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
  let playerLetters = [];
  let draw = 0;
  for (let i = 0; i < 10; i++) {
    draw = Math.floor(Math.random() * sumValues(letterList) + 1);
    for (let l in letterList) {
      // console.log(l, draw, playerLetters)
      if (letterList[l] >= draw && draw > 0) {
        letterList[l]--;
        playerLetters.push(l);
        draw--;
      }
      draw -= letterList[l];
    }
  }
  return playerLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let checkList = lettersInHand;
  input = input.toUpperCase();
  for (let l = 0; input.length > l; l++) {
    if (!checkList.includes(input[l])) {
      return false;
    }
    checkList.splice(checkList[checkList.indexOf(input[l])], 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score_dict = {
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

  word = word.toUpperCase();
  let score = 0;

  if (word.length > 6) {
    score += 8;
  }
  for (let letter of word) {
    score += score_dict[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let highestScore = { word: "", score: 0 };

  for (let word of words) {
    let newScore = scoreWord(word);
    if ((newScore == highestScore.score) & (highestScore.word.length < 10)) {
      if ((word.length < highestScore.word.length) | (word.length >= 10)) {
        highestScore.word = word;
        highestScore.score = newScore;
      }
    } else if (newScore > highestScore.score) {
      highestScore.word = word;
      highestScore.score = newScore;
    }
  }
  return highestScore;
};
