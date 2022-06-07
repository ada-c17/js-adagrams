//Get an array of letters, where every letter repeats depending on its frequency

// import { splice } from "core-js/core/array";

// can be done by hand (actually it would take less time)
export const buildArrayLetters = function (letterDistribution) {
  const lettersList = [];
  for (const letter in letterDistribution) {
    while (letterDistribution[letter] > 0) {
      lettersList.push(letter);
      letterDistribution[letter] = letterDistribution[letter] - 1;
    }
  }
  return lettersList;
};

// get ten random elements from a given array and return an array with
// those ten elements
export const getTenRandom = function (listOfLetters) {
  const randomLetters = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = [Math.floor(Math.random() * listOfLetters.length)];
    randomLetters.push(listOfLetters[randomIndex]);
    listOfLetters.splice(randomIndex, 1);
  }
  return randomLetters;
};

export const drawLetters = () => {
  const letterDistribution = {
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
  const freqLetters = buildArrayLetters(letterDistribution);
  const lettersDraw = getTenRandom(freqLetters);
  return lettersDraw;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const wordArray = input.split("");
  const lettersInHandCopy = [...lettersInHand];
  for (let i = 0; i < wordArray.length; i++) {
    if (lettersInHandCopy.includes(wordArray[i]) === false) {
      return false;
    } else {
      lettersInHandCopy.splice(lettersInHandCopy.indexOf(wordArray[i]), 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
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

  word = word.toUpperCase();
  let wordScore = 0;

  if (word.length >= 7) {
    wordScore += 8;
  }
  for (let i = 0; i < word.length; i++) {
    wordScore += scoreChart[word[i]];
  }
  return wordScore;
};

export const highestScoreFrom = (words) => {
  const firstScore = scoreWord(words[0]);
  const winScore = {
    word: words[0],
    score: firstScore,
  };

  for (let i = 1; i < words.length; i++) {
    let scoring = scoreWord(words[i]);

    if (scoring > winScore["score"]) {
      winScore["score"] = scoring;
      winScore["word"] = words[i];
    } else if (scoring === winScore["score"]) {
      if (words[i].length === 10 && winScore["word"].length < 10) {
        winScore["score"] = scoring;
        winScore["word"] = words[i];
        return winScore;
      } else if (
        words[i].length < winScore["word"].length &&
        winScore["word"].length != 10
      ) {
        winScore["score"] = scoring;
        winScore["word"] = words[i];
      }
    }
  }
  return winScore;
};
