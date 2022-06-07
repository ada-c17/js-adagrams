const LETTER_POOL = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
}

const SCORE_DICTIONARY = {
  "A": 1,
  "E": 1,
  "I": 1,
  "O": 1,
  "U": 1,
  "L": 1,
  "N": 1,
  "R": 1,
  "S": 1,
  "T": 1,
  "D": 2,
  "G": 2,
  "B": 3,
  "C": 3,
  "M": 3,
  "P": 3,
  "F": 4,
  "H": 4,
  "V": 4,
  "W": 4,
  "Y": 4,
  "K": 5,
  "J": 8,
  "X": 8,
  "Q": 10,
  "Z": 10,
}

const randomChoice = array => {
  return array[Math.floor(array.length * Math.random())];
};

export const drawLetters = () => {
  let hand = [];
  let listOfLetters = Object.keys(LETTER_POOL);

  while (hand.length < 10) {
    let letter = randomChoice(listOfLetters);

    // if (LETTER_POOL[letter] !== 0) {
    //   LETTER_POOL[letter] --;
    hand.push(letter);
    // };
  };
  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandDict = {};

  lettersInHand.forEach(function(letter) {
    if (letter in lettersInHandDict) {
      lettersInHandDict[letter] ++;
    } else {
      lettersInHandDict[letter] = 1;
    };
  });

  for (let character of input) {
    if (character in lettersInHandDict && lettersInHandDict[character] > 0) {
      lettersInHandDict[character] --;
      } else {
        return false;
      };
    };

  return true;
};

export const scoreWord = (word) => {
  let convertedWord = word.toUpperCase()
  let wordScore = 0;

  if (convertedWord.length < 1) {
    return wordScore;
  };

  for (let letter of convertedWord) {
    wordScore += SCORE_DICTIONARY[letter];
  };

  if (convertedWord.length > 7) {
    wordScore += 8;
  };

  return wordScore;
};

export const highestScoreFrom = (words) => {
  let bestWord = [
    words[0], scoreWord(words[0])
  ];

  words.forEach(function(word) {
    if (scoreWord(word) > bestWord[1]) {
      bestWord[0] = word;
      bestWord[1] = scoreWord(word);
    } else if (scoreWord(word) === bestWord[1]) {
      if (word.length === 10 && bestWord[0].length !== 10) {
          bestWord[0] = word;
      } else if (word.length < bestWord[0].length && bestWord[0].length !== 10) {
          bestWord[0] = word;
      };
    };
  });

  let winner = {
    "word" : bestWord[0],
    "score" : bestWord[1]
  };

  return winner;
};
