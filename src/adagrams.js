// HELPER FUNCTIONS

/*
This function uses the built in method 'reduce' to reduce the array based on the parameters supplied.
It looks to see if the letter is in the array and, if it is, it adds 1 to the return value.
*/
export const countTimes = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// This function loads the winner into an object
export const loadWinner = (word, score) => {
  let winner = {};

  winner.word = word;
  winner.score = score;

  return winner;
};

// This function handles any tie scores
export const tieBreaker = (maxScore) => {
  let smallestWordLen = 1000;
  let winner = {};
  let nxtWord,
    winWord = "";
  let nxtScore,
    winScore = 0;

  for (let i = 0; i < maxScore.length; i++) {
    nxtWord = maxScore[i][0];
    nxtScore = maxScore[i][1];

    if (nxtWord.length === 10) {
      winWord = nxtWord;
      winScore = nxtScore;
      break;
    } else if (nxtWord.length < smallestWordLen) {
      smallestWordLen = nxtWord.length;
      winWord = nxtWord;
      winScore = nxtScore;
    } else {
      continue;
    }
  }

  winner = loadWinner(winWord, winScore);
  return winner;
};

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

  let clone = JSON.parse(JSON.stringify(letterPool));
  let userHand = [];

  while (userHand.length != 10) {
    // Using the random math generator as the index for a random letter from the pool
    const randNum = Math.floor(Math.random() * 26);
    const char = Object.keys(letterPool)[randNum];

    let letterCount = clone[char];

    /* 
    If the letter obtained has already been used the max number of times, it'll try again
    If the letter still can be used, the counter for that letter gets reduced by 1
      and the letter gets added to the hand
    */

    if (letterCount === 0) {
      continue;
    } else {
      clone[char] -= 1;
      userHand.push(char);
    }
  }
  // return the user hand of 10 random letters
  return userHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  // Change the input to upper case
  input = input.toUpperCase();

  /*
    Check how many times a letter appears in the supplied word (input)
    Check how many time that same letter appears in the user's hand
  */
  for (const letter of input) {
    /* Using RegExp to create the string to pass to the search
      Since the 'includes' function does not handle variables directly */
    let rgxp = new RegExp(letter, "g");
    let letterCount = input.match(rgxp).length;

    /* Check if the letter from the user hand is in 
      the letter bank the user had to choose from */

    let isFound = lettersInHand.includes(letter);
    if (isFound === true) {
      let bankCount = countTimes(lettersInHand, letter);
      // Make sure the letter isn't used more times than allowed
      if (letterCount <= bankCount) {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (input) => {
  // Implement this method for wave 3
  const letterVals = {
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
  let letterCount = 0;
  let finalScore = input.length >= 7 ? 8 : 0;

  if (input === "") {
    return 0;
  }

  input = input.toUpperCase();

  for (const letter of input) {
    letterCount = letterVals[letter];
    finalScore += letterCount;
  }

  return finalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let winner = {};
  let maxScore = [["", 0]];

  for (const word of words) {
    let i = 0;
    let wordScore = 0;
    wordScore = scoreWord(word);

    if (wordScore > maxScore[i][1]) {
      maxScore = [];
      maxScore.push([word, wordScore]);
    } else if (wordScore == maxScore[i][1]) {
      maxScore.push([word, wordScore]);
    } else {
      continue;
    }
    i++;
  }

  if (maxScore.length > 1) {
    winner = tieBreaker(maxScore);
  } else {
    winner = loadWinner(maxScore[0][0], maxScore[0][1]);
  }
  return winner;
};
