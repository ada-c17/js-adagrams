const makeLetterDataset = () => {
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
  return letterDataset;
};

const makeScoreTable = () => {
  const letterDataset = makeLetterDataset();
  const scoreMap = new Map();
  letterDataset.forEach((data) => {
    scoreMap.set(data.letter, data.score);
  });
  return scoreMap;
};

const weightedRandomLetter = (dataset) => {
  let weights = [];

  for (let i = 0; i < dataset.length; i++) {
    weights[i] = dataset[i].count + (weights[i - 1] || 0);
  }

  let random = Math.random() * weights[weights.length - 1];

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > random) {
      return [dataset[i].letter, i];
    }
  }
};

export const drawLetters = () => {
  // Implement this method for wave 1
  // const letterDataset = makeLetterDataset();
  // const hand = [];
  // let i = 0;
  // while (i < 10) {
  //   const letterIndex = Math.floor(Math.random() * 26);
  //   if (letterDataset[letterIndex].count > 0) {
  //     hand.push(letterDataset[letterIndex].letter);
  //     letterDataset[letterIndex].count -= 1;
  //     ++i;
  //   }
  // }
  // return hand;

  // });
  const letterDataset = makeLetterDataset();
  const hand = [];
  for (let i = 0; i < 10; i++) {
    const [letter, index] = weightedRandomLetter(letterDataset);
    hand.push(letter);
    letterDataset[index].count -= 1;
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const freqMap = new Map();
  lettersInHand.forEach((letter) => {
    freqMap.set(letter, (freqMap.get(letter) || 0) + 1);
  });

  Array.from(input).forEach((letter) => {
    freqMap.set(letter, (freqMap.get(letter) || 0) - 1);
  });

  return Array.from(freqMap.values()).every((count) => count > -1);
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const scoreTable = makeScoreTable();
  const addScores = (total, letter) => total + scoreTable.get(letter);
  let wordScore = Array.from(word.toUpperCase()).reduce(addScores, 0);
  if (word.length >= 7) wordScore += 8;

  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let highestWord = null;
  let highestScore = 0;
  const makeWinner = (word, score) => ({ word, score });
  const wordScoreMap = new Map();
  words.forEach((word) => {
    wordScoreMap.set(word, scoreWord(word));
    if (wordScoreMap.get(word) > highestScore) {
      highestWord = word;
      highestScore = wordScoreMap.get(word);
    }
  });
  // return this early because this condition would break ties anyway
  if (highestWord.length === 10) {
    return makeWinner(highestWord, highestScore);
  }

  // tie breaking logic
  for (const word of words) {
    if (wordScoreMap.get(word) === highestScore && word !== highestWord) {
      if (word.length === 10 || word.length < highestWord.length) {
        return makeWinner(word, highestScore);
      }
    }
  }
  return makeWinner(highestWord, highestScore);
};
