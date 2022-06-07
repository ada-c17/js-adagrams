import {
  LETTER_POOL,
  SCORE_DICTIONARY
} from "constants";

const randomChoice = array => {
  return array[Math.floor(array.length * Math.random())];
};

export const drawLetters = () => {
  let hand = [];
  let listOfLetters = Object.keys(LETTER_POOL);
  let copyOfLetterPool = { ...LETTER_POOL };

  while (hand.length < 10) {
    let letter = randomChoice(listOfLetters);

    if (copyOfLetterPool[letter] === 0) {
      continue;
    } else {
      copyOfLetterPool[letter] --;
      hand.push(letter);
    };
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

  if (convertedWord.length >= 7) {
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
