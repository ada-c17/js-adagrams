export const drawLetters = () => {
  // Implement this method for wave 1
  const scoreChart = {
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
  
  let letters = [];

  for (const [letter, inputLetterFreq] of Object.entries(scoreChart)) {
    for (let i = 0; i < inputLetterFreq; i++) {
      letters.push(letter);
    }
  };
  // not able to create a shuffling algo myself
  // Fisher-Yates shuffle algorithm
  // https://masteringjs.io/tutorials/fundamentals/shuffle#:~:text=To%20properly%20shuffle%20an%20array%20in%20JavaScript%2C%20use,random%20element%20in%20the%20array%20as%20shown%20below.
  for (let i = letters.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = letters[j];
    letters[j] = letters[i];
    letters[i] = temp;
  };
  return letters.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputLetterFreq = {};
  for (const letter of input) {
    if (letter.toUpperCase() in inputLetterFreq) {
      inputLetterFreq[letter.toUpperCase()] += 1;
    } else {
      inputLetterFreq[letter.toUpperCase()] = 1;
    }
  };

  let lettersInHandFreq = {};
  for (const letter of lettersInHand) {
    if (letter.toUpperCase() in lettersInHandFreq) {
      lettersInHandFreq[letter.toUpperCase()] += 1;
    } else {
      lettersInHandFreq[letter.toUpperCase()] = 1;
    }
  };

  for (const letter of input) {
    /* If the letter does not exist in the `lettersInHandFreq` or the `input` letter 
    frequency is greater than `lettersInHand`'s frequency, return false. Otherwise,
    return true. */
    if (typeof(lettersInHandFreq[letter.toUpperCase()]) === 'undefined' ||
    inputLetterFreq[letter.toUpperCase()] > lettersInHandFreq[letter
    .toUpperCase()]) {
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

  let score = 0;
  for (const letter of word) {
    if (letter.toUpperCase() in scoreChart) {
      score += scoreChart[letter.toUpperCase()];
    }
  }

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1

  const wordScores = [];
  for (let i = 0; i < words.length; i++) {
    wordScores.push(words[i])
    wordScores.push(scoreWord(words[i]))
  }

  let maxScore = 0;
  for (let i = 1; i < wordScores.length; i += 2) {
    if (wordScores[i] > maxScore) {
      maxScore = wordScores[i];
    }
  }

  let tieScoreWords = [];
  for (let i = 1; i < wordScores.length; i += 2) {
    if (wordScores[i] === maxScore) {
      tieScoreWords.push(wordScores[i - 1]);
    }
  }

  let winningWord = '';
  if (tieScoreWords.length > 1) {
    for (const word of tieScoreWords) {
      if (word.length < winningWord.length || !(winningWord.length)) {
        winningWord = word;
      }
      if (word.length >= 10) {
        winningWord = word;
        break;
      }
    }
  }
  else {
    winningWord = tieScoreWords[0];
  }

  return {
    word: winningWord,
    score: maxScore
  };
};