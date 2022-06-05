import Chance from "chance";

const chance = new Chance();

export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(
    " "
  );
  const weights = [
    9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2,
    1,
  ];

  //https://stackoverflow.com/a/58525959
  const bag = letters.flatMap((letter, i) => Array(weights[i]).fill(letter));

  return chance.pickset(bag, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersAvailable = Array.from(lettersInHand);
  return input
    .toUpperCase()
    .split("")
    .every((letter) => {
      if (lettersAvailable.includes(letter)) {
        const index = lettersAvailable.indexOf(letter);
        lettersAvailable.splice(index, 1);
        return true;
      } else {
        return false;
      }
    });
};

export const scoreWord = (word) => {
  const letterValues = {
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
  let result = 0;
  word
    .toUpperCase()
    .split("")
    .forEach((letter) => {
      if (letter in letterValues) {
        result += letterValues[letter];
      }
    });
  if (word.length >= 7 && word.length <= 10) {
    result += 8;
  }
  return result;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
