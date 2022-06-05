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
  const ten_letters = [];
  const keys = Object.keys(letterPool);
  const letterPoolCopy = { ...letterPool }; //use...to make a deep copy, not work for nested obj
  // const values = Object.values(letterPool);

  while (ten_letters.length < 10) {
    let letter = keys[Math.floor(Math.random() * keys.length)];
    if (letterPoolCopy[letter] > 0) {
      ten_letters.push(letter);
      letterPoolCopy[letter] -= 1;
    }
  }
  // console.log(ten_letters);
  return ten_letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // create a freq dict for lettersInHand
  // loop thru input, if in dict value - 1, no nagative value => valid input
  let letterBank = {};
  for (let letter of lettersInHand) {
    if (letter in letterBank) {
      letterBank[letter]++;
    } else {
      letterBank[letter] = 1;
    }
  }
  // console.log(`letterBank: ${letterBank}`)
  console.log(letterBank);

  const inputUpperCase = input.toUpperCase();
  console.log(inputUpperCase);
  for (let letter of inputUpperCase) {
    if (letterBank[letter]) {
      letterBank[letter] -= 1;
      if (letterBank[letter] < 0) {
        return false;
      }
    } else if (!letterBank[letter]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  for (let letter of word.toUpperCase()) {
    score += scoresChart[letter];
  }
  if (word.length > 6 && word.length < 11) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // store each words in a dict-scores
  let scores = {};
  for (let word of words) {
    scores[word] = scoreWord(word);
  }
  //create a list to store tie scores: tieWords
  //find the max score, if more then one, push all in tieWords
  let tieWords = [];
  let maxScore = Math.max(...Object.values(scores));
  for (let wd of words) {
    if (scores[wd] === maxScore) {
      tieWords.push(wd);
    }
  }
  //find the winner:
  // look for len of 10 : if word has length of 10 => winner
  // elif not len of 10. fewer len word is the winner
  // elif same len: first word is winner
  let minLen = 10;
  let minLenWord = "";
  for (let el of tieWords) {
    if (el.length < minLen) {
      minLen = el.length;
      minLenWord = el;
    }
  }

  let winner = {};
  for (const word of tieWords) {
    if (tieWords.length === 1) {
      winner["word"] = word;
      winner["score"] = scores[word];
    } else if (word.length === 10) {
      winner["word"] = word;
      winner["score"] = scores[word];
      break;
    } else {
      winner["word"] = minLenWord;
      winner["score"] = scores[minLenWord];
    }
  }
  return winner;
};
