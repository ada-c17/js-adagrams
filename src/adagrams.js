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

const SCORE_MAP = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};
export const drawLetters = () => {
  // Implement this method for wave 1
  // make copy of object
  const letterPoolCopy = {
    ...LETTER_POOL,
  };
  const player_hand = [];

  while (player_hand.length < 10) {
    const letter_pool = Object.keys(letterPoolCopy);
    let letter = letter_pool[Math.floor(Math.random() * letter_pool.length)];

    if (letterPoolCopy[letter[0]] === 0) {
      continue;
    } else {
      letterPoolCopy[letter[0]] -= 1;
    }

    player_hand.push(letter);
  }
  return player_hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterBank = {};
  const word = input.toUpperCase();

  for (let letter of lettersInHand) {
    if (letter in letterBank) {
      letterBank[letter] += 1;
    } else {
      letterBank[letter] = 1;
    }
  }

  for (let character of word) {
    if (character in letterBank && letterBank[character] > 0) {
      letterBank[character] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let wordScore = 0;
  const convertedWord = word.toUpperCase();

  for (let letter of convertedWord) {
    if (letter in SCORE_MAP) {
      wordScore += SCORE_MAP[letter];
    }
  }
  if (word.length >= 7) {
    wordScore += 8;
  }

  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  const bestWord = { score: scoreWord(words[0]), word: words[0] };
  for (let word of words) {
    console.log(word, scoreWord(word));
    if (scoreWord(word) > bestWord['score']) {
      bestWord['score'] = scoreWord(word);
      bestWord['word'] = word;
    } else if (scoreWord(word) === bestWord['score']) {
      if (bestWord['word'].length === 10) {
        continue;
      } else if (word.length === 10 || word.length < bestWord['word'].length) {
        bestWord['word'] = word;
      }
    }
  }
  console.log(bestWord);
  return bestWord;
};
