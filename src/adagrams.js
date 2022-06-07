export const makeLetterPool = () => {
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

  const letter_array = [];
  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letter_array.push(letter);
    }
  }

  return letter_array;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = makeLetterPool();
  const hand = [];

  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * letters.length);
    hand.push(letters[num]);
    letters.splice(num, 1);
  }
  return hand;
};

export const frequencyMap = (string) => {
  const frequencyMap = {};
  for (const letter of string) {
    if (frequencyMap[letter]) {
      frequencyMap[letter]++;
    } else {
      frequencyMap[letter] = 1;
    }
  }

  return frequencyMap;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const inputLetterFrequency = frequencyMap(input.toUpperCase());
  const handLetterFrequency = frequencyMap(lettersInHand);

  for (const letter in inputLetterFrequency) {
    if (
      inputLetterFrequency[letter] > handLetterFrequency[letter] ||
      !handLetterFrequency[letter]
    ) {
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
    Z: 10,
  };
  let score = 0;
  for (const letter of word.toUpperCase()) {
    score = score + scoreChart[letter];
  }

  if (word.length >= 7 && word.length <= 10) {
    score = score + 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const scores = []; //initialize object to map words to scores
  //loop through array of words and calculate their scores
  //and add them to the scores object
  for (let i = 0; i < words.length; i++) {
    scores.push(scoreWord(words[i]));
  }
  //find the highest score
  let index = 0; //pick the first word in list as highest scoring word
  for (let i = 1; i < words.length; i++) {
    //if the score is greater update the index of the highest scoring word
    //if scores are equal go through tie breaking cases
    if (scores[i] > scores[index]) {
      index = i;
    } else if (scores[i] === scores[index] && words[index].length !== 10) {
      if (words[i].length === 10) {
        index = i;
      } else if (words[i].length < words[index].length) {
        index = i;
      }
    }
  }
  const highestWordScore = { word: words[index], score: scores[index] };
  return highestWordScore;
};
