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
  Z: 1
};

const letterScores = {
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
  Z: 10
};

export const drawLetters = () => {
  let userHand = []
  let availableLetters = []

  // iterate through object with letter distribution to populate availableLetters array
  for (let letter in letterDistribution) {
    availableLetters = availableLetters.concat(Array(letterDistribution[letter]).fill(letter));
  }

  /*
    build a userHand by looping 10 times, each time choosing a random index
    in the 98 letters in the availableLetters array, and the letter at that index;
    then remove chosen letter from availableLetters array, and add to userHand.
  */
  for (var i = 0; i < 10; i++) {
    var chosenLetterIdx = Math.floor(Math.random() * availableLetters.length)
    // chosenLetter = availableLetters[chosenLetterIdx];
    var chosenLetter = availableLetters.splice(chosenLetterIdx, 1);
    // console.log("chosen Letter", chosenLetter);
    // console.log("index", chosenLetterIdx);
    userHand = userHand.concat(chosenLetter);
  }

  return userHand;
};

export const hashingFun = (str) => {
  let frequencyDict = {};

  for (var i = 0; i < str.length; i++) {
    if (frequencyDict[str[i]] === undefined) {
      frequencyDict[str[i]] = 1;
    } else {
      frequencyDict[str[i]]++;
    }
  }

  return frequencyDict;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const userHandFrequency= hashingFun(lettersInHand);
  const wordFrequency = hashingFun(input);

  for (var key in wordFrequency) {
    if (userHandFrequency[key] === undefined || userHandFrequency[key] < wordFrequency[key]) {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  let bonus = 8;
  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    score += letterScores[word[i]];
  }

  if (word.length >= 7 && word.length < 11) {
    score += bonus;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  var winningWordData = {};
  var topScore = scoreWord(words[0]);
  var topWords = [];

  for (var i = 0; i < words.length; i++) {
    var currentWordScore = scoreWord(words[i]);

    if (currentWordScore === topScore) {
      topWords.push(words[i]);
    }
    if (currentWordScore > topScore) {
      topScore = currentWordScore;
      topWords = [];
      topWords.push(words[i])
    }
  }

  var shortestWord = topWords[0];
  for (var i = 0; i < topWords.length; i++) {
    if (topWords[i].length === 10 && winningWordData['word'] === undefined) {
      winningWordData['word'] = topWords[i];
      winningWordData['score'] = scoreWord(topWords[i]);
    } else if (topWords[i].length < shortestWord.length) {
      shortestWord = topWords[i];
    }
  }

  if (winningWordData['word'] === undefined) {
    winningWordData['word'] = shortestWord;
    winningWordData['score'] = scoreWord(shortestWord);
  }

  return winningWordData;
};
