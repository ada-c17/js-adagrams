export const drawLetters = () => {
  let letter_quantity = {
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

  let letter_bank = [];
  const top_range = "A".charCodeAt(0);
  const bottom_range = "Z".charCodeAt(0);

  let counter = 0;
  while (counter < 10) {
    const rand_i = Math.random() * (top_range - bottom_range) + bottom_range;
    const letter = String.fromCharCode(rand_i);
    const value = letter_quantity[letter];
    if (value > 0) {
      letter_bank.push(letter);
      letter_quantity[letter] -= 1;
      counter += 1;
    }
  }
  return letter_bank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letters_dict = {};
  for (const char of lettersInHand) {
    if (letters_dict[char]) {
      letters_dict[char] += 1;
    } else {
      letters_dict[char] = 1;
    }
  }

  for (const letter of input) {
    if (!letters_dict[letter]) {
      return false;
    } else {
      letters_dict[letter] -= 1;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const letter_points = {
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

  if (!word) {
    return 0;
  }

  let score = 0;
  for (const char of word) {
    score += letter_points[char.toUpperCase()];
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let top_word = words[0];
  let top_score = 0;
  let top_length = words[0].length;
  for (const word of words) {
    const score = scoreWord(word);
    const length = word.length;
    if (
      score > top_score ||
      (score === top_score &&
        top_length !== 10 &&
        (length < top_length || length === 10))
    ) {
      top_score = score;
      top_word = word;
      top_length = length;
    }
  }
  return { word: top_word, score: top_score };
};
