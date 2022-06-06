/**
 * The function drawLetters will populate a letter bank allLetters
 * that contains the letter and n frequency from LETTER_POOL.
 * Then, the function will generate 10 random letters and store
 * them in a listOfstrings
 */
export const drawLetters = () => {
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
  const allLetters = [];
  for (const element in LETTER_POOL) {
    const freqLetter = LETTER_POOL[element];

    for (let step = 0; step < freqLetter; step++) {
      allLetters.push(element);
    }
  }

  const listOfstrings = [];

  while (listOfstrings.length < 10) {
    const randomIndex = Math.floor(Math.random() * allLetters.length);
    const selectedLetter = allLetters[randomIndex];
    listOfstrings.push(selectedLetter);
    allLetters.splice(randomIndex, 1);
  }
  return listOfstrings;
};

/**
 * The function usesAvailableLetters checks if each element in the
 * input is also present in lettersInHand of drawn letters. If true, the specific
 * character is removed from lettersInHand list to properly represent
 * the updated drawn letters.
 */
export const usesAvailableLetters = (input, lettersInHand) => {
  for (const letter in input) {
    if (!lettersInHand.includes(input[letter])) {
      return false;
    } else {
      lettersInHand.splice(input[letter], 1);
    }
  }
  return true;
};

/**
 * The function scoreWord checks the word input and determine the
 * points associated with each character determined by object lettersAndpointValues.
 * Words between the length of 7 and 10, will have additional bonus point of 8.
 * scoreWord returns the sum of points of input, word.
 */
export const scoreWord = (word) => {
  const lettersAndpointValues = {
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
  const bonus = 8;
  let pointsSum = 0;
  for (const letter of word.toUpperCase()) {
    let pointsPerletter = lettersAndpointValues[letter];
    pointsSum += pointsPerletter;
  }
  if (7 <= word.length && word.length <= 10) {
    return pointsSum + bonus;
  }
  return pointsSum;
};

/**
 * The function highestScoreFrom takes in a list of strings. The maxScore is
 * found via helper function scoreWord and comparing scores throughout each iteration.
 * The object scoreAndword containing word and maxScore is returned. In a tie logic,
 * the priority for returning obj is: words with 10 letters, fewer letters if length
 * is not 10, and the first word if length and score are the same.
 */
export const highestScoreFrom = (words) => {
  const scoreAndword = {};
  let maxScore = 0;
  for (const word of words) {
    let totalScore = scoreWord(word);
    if (totalScore > maxScore) {
      maxScore = totalScore;
      scoreAndword["word"] = word;
    } else if (totalScore === maxScore) {
      if (scoreAndword["word"].length !== 10) {
        if (word.length === 10) {
          scoreAndword["word"] = word;
        } else if (word.length < scoreAndword["word"].length) {
          scoreAndword["word"] = word;
        }
      }
    }
  }
  scoreAndword["score"] = maxScore;
  return scoreAndword;
};
