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
  for (const letter of input.toUpperCase()) {
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
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
