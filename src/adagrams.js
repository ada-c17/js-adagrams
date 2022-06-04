// import { random } from "core-js/core/number";

const LETTER_POOL = {
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

const generateRandomLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomCharacter;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = [];
  let count = 1;
  let letterPoolCopy = { ...LETTER_POOL };
  while (count <= 10) {
    let randomLetter = generateRandomLetter();
    if (letterPoolCopy[randomLetter] == 0) {
      continue;
    } else {
      letters.push(randomLetter);
      count += 1;
      letterPoolCopy[randomLetter] -= 1;
    }
  }
  return letters;
};

const counter = (list1) => {
  const dict1 = {};
  for (let elem of list1) {
    if (dict1[elem]) {
      dict1[elem] += 1;
    } else {
      dict1[elem] = 1;
    }
  }
  return dict1;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const wordFreq = counter(input.toUpperCase());
  const lettersFreq = counter(lettersInHand);
  for (let letter of input) {
    if (!lettersInHand.includes(letter.toUpperCase())) {
      return false;
    }
  }
  for (let char in wordFreq) {
    if (wordFreq[char] > lettersFreq[char]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
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
    P: 2,
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

  const capWord = word.toUpperCase();
  let totalScore = 0;
  if (word === " ") {
    return totalScore;
  }
  if (word.length >= 7 && word.length <= 10) {
    totalScore += 8;
  }
  for (let letter of capWord) {
    totalScore += scoreChart[letter];
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const scoreDict = buildScoreDict(words);
  const maxScoreWord = keyWithMaxValue(scoreDict);
  max_score = scoreDict[maxScoreWord] 
  maxScoreWords = [word for word in words if scoreDict[word] >= max_score]
  if len(maxScoreWords) == 1:
      return (maxScoreWord, max_score)
  return resolve_ties(maxScoreWords, scoreDict)
};

const buildScoreDict = (words) => {
    const scoreDict = {};
    for (let word of words) {
        scoreDict[word] = scoreWord(word)
    }
    return scoreDict;
}


def resolve_ties(maxScoreWords, scoreDict):
    word_lengths = build_lengths_dict(maxScoreWords)
    shortest_word = min(word_lengths, key=word_lengths.get)
    for key, value in word_lengths.items():
        if value == 10:
            return (key, scoreDict[key])
        else:
            result = (shortest_word, scoreDict[shortest_word])
    return result


def build_lengths_dict(maxScoreWords):
    word_lengths = {}
    for word in maxScoreWords:
        word_lengths[word] = len(word)
    return word_lengths

const keyWithMaxValue = aDict => {
  let max = 0;
  let maxKey = '';
  for (let char in aDict) {
    if (aDict[char] > max) {
      max = aDict[char];
      maxKey = char;
    }
  }
  return maxKey;
};