const poolHash = {
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

const scoreChart = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

export const drawLetters = () => {
  // Implement this method for wave 1

  const poolArr = [];

  for (let letter in poolHash) {
    for (let i = 0; i < poolHash[letter]; i++) {
      //while i is less than the frequency of the letter
      poolArr.push(letter); //it appends that letter to poolArr
    } //it creates an array of the form [A,A,A,A,A,A,A,A,A,B.B.C,C,...]
  }

  const shufflePool = (poolArr) => {
    //javascript.info/task/shuffle
    for (let i = poolArr.length - 1; i > 0; i--) {
      //assigns length of array minus one to i and while i is posititve it loops subrtracting one from i each iteration
      let j = Math.floor(Math.random() * (i + 1)); // math.random returns a value from 0-1, add 1 to i so we can caputre last index in poolArr, the result is a random number from 0-(len-1)
      [poolArr[i], poolArr[j]] = [poolArr[j], poolArr[i]]; //the two letters switch their index
    }
    return poolArr.slice(0, 10); //after shuffle the first 10 are returned
  };
  return shufflePool(poolArr);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  const wordUp = input.toUpperCase();
  const lettersInHandCopy = lettersInHand.slice(); //creates a copy that can be editted without copy I couldn't reuse a letter while playing

  for (const letter of wordUp) {
    if (!lettersInHandCopy.includes(letter)) {
      return false;
    }
    lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;

  const wordUp = word.toUpperCase();

  if (wordUp.length >= 7) {
    score += 8;
  }

  for (const letter of wordUp) {
    for (const letterScore in scoreChart) {
      if (scoreChart[letterScore].includes(letter)) {
        score += parseInt(letterScore); //the key is not an int so it needs to be converted before it is added
      }
    }
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  //set variable with highest score equal to value of first word in object
  //loop through object and if a score is higher than the highest score update the score
  //find all words that have that score and then check if equal to 10 and for shorter word
  // return the word and score
  const tiedWords = [];
  let winningScore = scoreWord(words[0]);

  for (const word of words) {
    let currentScore = scoreWord(word);
    if (currentScore > winningScore) {
      winningScore = currentScore;
    }
  }

  for (const word of words) {
    let currentScore = scoreWord(word);
    if (currentScore === winningScore) {
      tiedWords.push(word);
    }
  }

  let winningWord = tiedWords[0];

  for (const word of tiedWords) {
    if (word.length === winningWord.length) {
      winningWord = winningWord;
    } else if (word.length === 10) {
      winningWord = word;
    } else if (word.length < winningWord.length && winningWord.length !== 10) {
      winningWord = word;
    }
  }
  return { score: winningScore, word: winningWord };
};
