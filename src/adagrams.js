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

export const drawLetters = () => {
  /**
    parameters: none

    This function:
    --initializes a letters_list
    --copies the provided LETTER_POOLS frequency dictionary
    --turns it into a list of letters avaliable
    --randomly removes a letter from the letter_pool_list and appends it to the letter_list 10 times

    returns: letter_list which is a list of 10 letters
   */
  const copyObject = {...LETTER_POOL};

  let letterPoolList = [];

  for (const [letter, count] of Object.entries(copyObject)){
    const subArray = Array(count).fill(letter)
    letterPoolList = letterPoolList.concat(subArray);
  }
  
  const letterArray = [];
  for (let i=0; i<10; i++){
    let randomIndex = Math.floor(Math.random()*letterPoolList.length);
    let letter = letterPoolList[randomIndex];
    letterPoolList.splice(randomIndex, 1);
    letterArray.push(letter);
  }
  return letterArray
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
