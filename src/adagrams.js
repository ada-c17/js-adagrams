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
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
