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

  const output = [];
  const letterPoolChoices = Object.keys(LETTER_POOL).reduce((res, key) => {
    return res.concat(new Array(LETTER_POOL[key]).fill(key)); // try to refactor
  }, []);
  // for (const n in y) - loops through keys
  // then another for loop to fill the key value amt of times?
  // maybe I can still use reduce, but in a way I understand?
  while (output.length < 10) {
    const randomizeLetter = Math.floor(
      Math.random() * letterPoolChoices.length
    );
    let selectedLetter = letterPoolChoices[randomizeLetter];
    output.push(selectedLetter);
    let letterPosition = letterPoolChoices.indexOf(selectedLetter);
    letterPoolChoices.splice(letterPosition, 1);
  }
  return output;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const cloneLettersInHand = [...lettersInHand];
  for (let letter of input.toUpperCase()) {
    if (!cloneLettersInHand.includes(letter)) {
      return false;
    } else {
      let letterPosition = cloneLettersInHand.indexOf(letter);
      cloneLettersInHand.splice(letterPosition, 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const LETTERS_POINT_VALUES = {
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

  const BONUS = 8;
  const pointsForEachLetter = [];

  if (word.length === 0) {
    return 0;
  }

  for (let letter of word.toUpperCase()) {
    pointsForEachLetter.push(LETTERS_POINT_VALUES[letter]);
  }

  if (word.toUpperCase().length >= 7 && word.toUpperCase().length <= 10) {
    let sum = pointsForEachLetter.reduce(
      (point1, point2) => point1 + point2,
      0
    );
    return sum + BONUS;
  } else {
    let sum = pointsForEachLetter.reduce(
      (point1, point2) => point1 + point2,
      0
    );
    return sum;
  }
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
