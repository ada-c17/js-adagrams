// import { set } from "core-js/core/dict";

export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTERPOOL = {
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

  let letterHand = [];
  let letterObj = {...LETTERPOOL};
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while (letterHand.length < 10) {
    let randomNumber = Math.floor(Math.random() * 26);
    let randomLetter = alphabet.charAt(randomNumber);
    if (letterObj[randomLetter] > 0) {
      letterHand.push(randomLetter);
      letterObj[randomLetter] -= 1;
    }
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let availableLetters = [...lettersInHand];
  if (input.length > lettersInHand.length) {
    return false;
  } 
  let upperCaseInput = input.toUpperCase();
  let inputSet = new Set(upperCaseInput);
  let handSet = new Set(lettersInHand);

  const extraLetters = (inputSet - handSet);
  if (extraLetters.length > 0) {
    return false;
  }

  for (let letter in upperCaseInput) {
    if (availableLetters.includes(upperCaseInput[letter]) === false) {
      return false
    } else {
      let letterIndex = availableLetters.indexOf(upperCaseInput[letter]);
      availableLetters.splice(letterIndex, 1);
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
