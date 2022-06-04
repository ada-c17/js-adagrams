export const drawLetters = () => {
  // Implement this method for wave 1
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
  const letterList = [];
  for (const letter in letterPool) {
    let repeatNum = letterPool[letter];
    for (let i = 0; i < repeatNum; i++) {
      letterList.push(letter);
    }
  }
  console.log(letterList);

  const newLetterList = [];
  const countDict = {};

  let numLetters = 0;
  while (numLetters < 10) {
    let ri = Math.floor(Math.random() * letterList.length);
    let letter = letterList[ri];
    if (letter in countDict) {
      if (countDict[letter] < letterPool[letter]) {
        countDict[letter] += 1;
        newLetterList.push(letter);
        numLetters += 1;
      }
    } else {
      countDict[letter] = 1;
      newLetterList.push(letter);
      numLetters += 1;
    }
  }
  return newLetterList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterDict = {};
  for (let idx = 0; idx < lettersInHand.length; idx++) {
    let letter = lettersInHand[idx];
    if (!(letter in letterDict)) {
      letterDict[letter] = 1;
    } else {
      letterDict[letter]++;
    }
  }
  const word = input.toUpperCase();
  let keepChecking = true;
  for (let idx = 0; idx < word.length; idx++) {
    let letter = word[idx];
    if (!(letter in letterDict)) {
      keepChecking = false;
      break;
    } else {
      letterDict[letter] -= 1;
      if (letterDict[letter] < 0) {
        keepChecking = false;
        break;
      }
    }
  }
  return keepChecking;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (word.length === 0) {
    return 0;
  }
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
  let scorePoint = 0;
  word = word.toUpperCase();
  for (let idx = 0; idx < word.length; idx++) {
    let letter = word[idx];
    scorePoint += scoreChart[letter];
  }
  if (word.length >= 7) {
    scorePoint += 8;
  }
  return scorePoint;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  //Create list of dictionaries storing each word and its score
  const scoreslist = [];
  for (let idx = 0; idx < words.length; idx++) {
    let word = words[idx];
    //calling on the previous scoreWord function
    let score = scoreWord(word);
    scoreslist.push({
      word: word,
      score: score,
    });
  }

  //Create list of dictionaries storing word and score for top-scoring word(s)
  const topWords = [];
  let max = scoreslist[0]["score"];
  for (let idx = 1; idx < scoreslist.length; idx++) {
    let word = scoreslist[idx];
    if (scoreslist[idx]["score"] > max) {
      max = scoreslist[idx]["score"];
    }
  }
  for (let idx = 0; idx < scoreslist.length; idx++) {
    if (scoreslist[idx]["score"] === max) {
      topWords.push(scoreslist[idx]);
    }
  }
  //# If there is only one top word, return info for that one
  if (topWords.length === 1) {
    return topWords[0];
  } else if (topWords.length < 1) {
    return null;
  } else if (topWords.length > 1) {
    // See if there is a word of length 10
    for (let idx = 0; idx < topWords.length; idx++) {
      if (topWords[idx]["word"].length === 10) {
        return topWords[idx];
      }
    }
    let min = topWords[0]["word"].length;
    for (let idx = 1; idx < topWords.length; idx++) {
      if (topWords[idx]["word"].length < min) {
        min = topWords[idx]["word"].length;
      }
    }
    for (let idx = 0; idx < topWords.length; idx++) {
      if (topWords[idx]["word"].length === min) {
        return topWords[idx];
      }
    }
  }

  //# If there is less than one top word, error has occured, return None
};
