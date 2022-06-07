import { 
  LETTER_POOL,
  LETTER_SCORE,
} from "constants.js";


export const drawLetters = () => {
  // Implement this method for wave 1
  let letterPoolCopy = {...LETTER_POOL};
  let hand = [];
  while (hand.length < 10) {
    let letter = Object.keys(letterPoolCopy)[Math.floor(Math.random()*Object.keys(letterPoolCopy).length)];
    hand.push(letter);
    letterPoolCopy[letter]--;
    if (letterPoolCopy[letter] === 0) {
      delete letterPoolCopy[letter];
    }
  }
  return hand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = [...lettersInHand];
  const inputArray = Array.from(input);

  if (input.length < 1 || input.length > 10) return false;
  for (const letter of inputArray) {
    if (!lettersInHandCopy.includes(letter)) {
      return false;
    } else {
      const index = lettersInHandCopy.indexOf(letter);
      if (index > -1) {
        lettersInHandCopy.splice(index, 1);
      }
    }
  }
  return true;
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0 
  word = word.toUpperCase();
  const wordArray = Array.from(word);
  for (const char of wordArray) {
    if(LETTER_SCORE[char] === undefined) return 0;
    else {
      score += LETTER_SCORE[char];
    }
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordScores = words.map((word) => ({
    word: word,
    score: scoreWord(word),
  })
  );
  let result = wordScores.reduce((before, current) => {
    if (before.score > current.score) {
      return before;
    } else if (before.score == current.score) {
      if (before.word.length === 10) {
        return before;
      } else if (current.word.length === 10) {
        return current;
      } else if (before.word.length <= current.word.length) {
        return before;
      } else {
        return current;
      }
    } else {
      return current;
    }
  });
  return result;
};

