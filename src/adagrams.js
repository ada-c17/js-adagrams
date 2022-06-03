import _ from "lodash";

export const drawLetters = () => {
  // Implement this method for wave 1

  const letterPool = {
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

  const eachLetterPool = [];

  for (const letter in letterPool) {
		for (let i = 0; i < letterPool[letter]; i++) {
			eachLetterPool.push(letter);
    }
  }

  const handPool = []
  while (handPool.length < 10) {
    const randomLetter = eachLetterPool[Math.floor(Math.random() * eachLetterPool.length)];
    handPool.push(randomLetter);
    const indexToRemove = eachLetterPool.indexOf(randomLetter);
		eachLetterPool.splice(indexToRemove, 1);
  }

  return handPool;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  /**
   * make a deep copy of lettersInHand to work with copy and modify it
   * make empty checkingArray array to keep letter from word
   * use loop. for each letter in word check if 'letters in hands' contains letter
   *   if contains: 
   *      push letter to chekingArray
   *      remove letter from "letters in hand"
   * check if length of checkingArray is equal the length of word:
   *     return  true, otherwise return false
   */
  const handPool = _.cloneDeep(lettersInHand);
  const checkingArray = [];

  for (let letter of input) {
    if (handPool.includes(letter)) {
      checkingArray.push(letter);
      handPool.splice(handPool.indexOf(letter), 1)
    }
  }

  return checkingArray.length === input.length;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

  /**
   * create obj letterScore
   * create word1 which is all uppercase of word (to don't modify word)
   * use ternary operation to declare variable score and set initial value:
   *  if length of word1 is greater than 6 -> score = 8, else score = 0
   * looping through each letter in word1 and each iteration add value of letter to score
   * return score
   */

  const letterScore = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1, 
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8, 
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1, 
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1, 
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10
}

  const word1 = word.toUpperCase();
  let score = word1.length > 6 ? 8 : 0;

  for (let letter of word1) {
    score += letterScore[letter];
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
