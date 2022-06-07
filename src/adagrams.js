const letterDataset = [
  { letter: "A", count: 9, score: 1 },
  { letter: "B", count: 2, score: 3 },
  { letter: "C", count: 2, score: 3 },
  { letter: "D", count: 4, score: 2 },
  { letter: "E", count: 12, score: 1 },
  { letter: "F", count: 2, score: 4 },
  { letter: "G", count: 3, score: 2 },
  { letter: "H", count: 2, score: 4 },
  { letter: "I", count: 9, score: 1 },
  { letter: "J", count: 1, score: 8 },
  { letter: "K", count: 1, score: 5 },
  { letter: "L", count: 4, score: 1 },
  { letter: "M", count: 2, score: 3 },
  { letter: "N", count: 6, score: 1 },
  { letter: "O", count: 8, score: 1 },
  { letter: "P", count: 2, score: 3 },
  { letter: "Q", count: 1, score: 10 },
  { letter: "R", count: 6, score: 1 },
  { letter: "S", count: 4, score: 1 },
  { letter: "T", count: 6, score: 1 },
  { letter: "U", count: 4, score: 1 },
  { letter: "V", count: 2, score: 4 },
  { letter: "W", count: 2, score: 4 },
  { letter: "X", count: 1, score: 8 },
  { letter: "Y", count: 2, score: 4 },
  { letter: "Z", count: 1, score: 10 },
];

// honestly this is only like this because I wanted a different data structure
// but I was lazy so I automated it with this helper function
const makeScoreTable = () => {
  const scoreMap = new Map();
  letterDataset.forEach((data) => {
    scoreMap.set(data.letter, data.score);
  });
  return scoreMap;
};

const scoreTable = makeScoreTable();

export const drawLetters = () => {
  // Implement this method for wave 1
  // initialize variables
  const hand = [];
  const weightedPool = [];

  // make a pool of letters based on their counts
  letterDataset.forEach((data) => {
    weightedPool.push(...data.letter.repeat(data.count));
  });

  // make a set of random numbers representing indices for the pool
  const randomIndices = new Set();
  while (randomIndices.size < 10) {
    randomIndices.add(Math.floor(Math.random() * weightedPool.length));
  }

  // push letters into the hand by indexing into the pool
  randomIndices.forEach((index) => {
    hand.push(weightedPool[index]);
  });

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  // initialize frequency map variable
  const freqMap = new Map();

  // handleMap is a helper function that both builds the initial freq map
  // and removes the input's counts and invalid letters from the map
  // when supplied with a parameter remove = true
  const handleMap = (letter, subtract = false) => {
    let i = 1;
    if (subtract) i = -1;
    freqMap.set(letter, (freqMap.get(letter) || 0) + i);
  };
  lettersInHand.forEach((letter) => {
    handleMap(letter);
  });
  Array.from(input).forEach((letter) => {
    handleMap(letter, true);
  });

  // if all the values are 0 or more, we have a valid word.
  // because of the count subtraction logic when iterating over the input,
  // if any letter is less than 0 it means the input word used unavailabe letters
  return Array.from(freqMap.values()).every((count) => count > -1);
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  // addScores is a helper function for use with a reducer to sum the scores of letters
  const addScores = (total, letter) => total + scoreTable.get(letter);
  let wordScore = Array.from(word.toUpperCase()).reduce(addScores, 0);

  // add length bonus
  if (word.length >= 7) wordScore += 8;

  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  // initialize variables
  let highestWord = null;
  let highestScore = 0;

  // makeWinner is a helper function to return the proper datastructure
  const makeWinner = (word, score) => ({ word, score });

  // scoreSetCheck is a helper function that builds a map and updates highestScore
  const wordScoreMap = new Map();
  const scoreSetCheck = (word) => {
    wordScoreMap.set(word, scoreWord(word));
    if (wordScoreMap.get(word) > highestScore) {
      [highestWord, highestScore] = [word, wordScoreMap.get(word)];
    }
  };
  words.forEach(scoreSetCheck);

  // return this condition early because this condition would break ties anyway
  if (highestWord.length === 10) {
    return makeWinner(highestWord, highestScore);
  }

  // tie breaking logic ahead!
  // handleTie is a helper function to hold the boolean logic to check for and break ties
  const handleTie = (word) => {
    return (
      wordScoreMap.get(word) === highestScore &&
      word !== highestWord &&
      (word.length === 10 || word.length < highestWord.length)
    );
  };

  for (const word of words) {
    if (handleTie(word)) {
      return makeWinner(word, highestScore);
    }
  }

  // if we get this far without returning anything, this will return either the
  // uncontested highestWord, or the first encountered highestWord in case of a tie
  return makeWinner(highestWord, highestScore);
};
