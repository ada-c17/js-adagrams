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
    const subArray = Array(count).fill(letter);
    letterPoolList = letterPoolList.concat(subArray);
  }
  
  const letterArray = [];
  for (let i=0; i<10; i++){
    let randomIndex = Math.floor(Math.random()*letterPoolList.length);
    let letter = letterPoolList[randomIndex];
    letterPoolList.splice(randomIndex, 1);
    letterArray.push(letter);
  }
  return letterArray;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  /**
    parameters:
    --a string (word)
    --a list (letter_bank) of 10 letters

    this function checks if user word's letters are in our letter bank by:
    --makes a copy of letter_bank
    --for each character of the word, capitalizes it and checks to see if it is in the letter_bank copy
        --if the character is in the letter_bank copy, then we remove that character from the letter_bank copy 
        --if not, return False
    --return True indicating all letters in our word were in the letter_bank list

    returns: Boolean
   */
    console.log('The hand:', lettersInHand, '\nLetters guessed:',input)
    const copyArray = [...lettersInHand];
    let result = true

    const lettersInHandObject = {}
    copyArray.forEach(letter => lettersInHandObject[letter] = (lettersInHandObject[letter] || 0) + 1);

    for(let character of input){
      character = character.toUpperCase();
      if (character in lettersInHandObject && lettersInHandObject[character] > 0){
        lettersInHandObject[character]--;
        console.log(lettersInHandObject);
      }else{
        result = false;
      }
    }
    return result
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
