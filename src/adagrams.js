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
    //console.log(randomIndex);
  }
  return listOfstrings;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const letter in input) {
    if (!lettersInHand.includes(input[letter])) {
      // IF IN ONLY WORKS FOR OBJ
      return false;
    } else {
      lettersInHand.splice(input[letter], 1);
    }
  }
  return true;
};

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
    //word is a string
    let pointsPerletter = lettersAndpointValues[letter];
    pointsSum += pointsPerletter;
  }
  if (7 <= word.length && word.length <= 10) {
    return pointsSum + bonus;
  }
  return pointsSum;
};

export const highestScoreFrom = (words) => {
  const scoreAndword = {};
  let maxScore = 0;
  let lenFewerletters = 1000; //setting it to large num
  for (const word of words) {
    //array of strings
    //word is a string
    let totalScore = scoreWord(word);
    if (totalScore > maxScore) {
      maxScore = totalScore;
      scoreAndword["word"] = word;
      // if (totalScore === maxScore) { #tr
      //   scoreAndword["word"] = word;
      //   console.log(scoreAndword["word"]);
      // }
      //scoreAndword["word"] = word; //rn this is choosing the last word, need to choose first for tied test

      if (word.length === 10) {
        scoreAndword["word"] = word; //make them select FIRST WORD when same length
      } else if (word.length !== 10) {
        word.length < lenFewerletters; //5 <1000, 4 <5 2 < 4,
        lenFewerletters = word.length; //5, 4,2,6
        scoreAndword["word"] = word;
      }
      // console.log(scoreAndword["word"]);
      // console.log("new test");
    }
  }
  // console.log(scoreAndword["word"]);
  // console.log(maxScore);
  // console.log("NExt test");
  scoreAndword["score"] = maxScore;
  //console.log(scoreAndword); //correctly printing max score/word of all test cases
  return scoreAndword;
};
