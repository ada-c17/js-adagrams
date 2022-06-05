import { Math } from "core-js";

const letterPool = {
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

const letterScores = {
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

//DOCSTRING
// #     '''
// #     parameters: none

// #     This function:
// #     --initializes a letters_list
// #     --copies the provided LETTER_POOLS frequency dictionary
// #     --turns it into a list of letters avaliable
// #     --randomly removes a letter from the letter_pool_list and appends it to the letter_list 10 times

// #     returns: letter_list which is a list of 10 letters
// #     '''
export const drawLetters = () => {
  let letterPoolArray = [];
  for (const [key, value] of Object.entries(letterPool)) {
    const letterNumTimes = Array(value).fill(key);
    letterPoolArray = letterPoolArray.concat(letterNumTimes);
  }
  const lettersSelected = [];
  for (let i = 0; i < 10; i++) {
    let letter =
      letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
    lettersSelected.push(letter);
    letterPoolArray.splice(letterPoolArray.indexOf(letter), 1);
  }
  return lettersSelected;
};

//DOCSTRING
//FROM PYTHON
// '''
// parameters:
// --a string (word)
// --a list (letter_bank) of 10 letters

// this function checks if user word's letters are in our letter bank by:
// --makes a copy of letter_bank
// --for each character of the word, capitalizes it and checks to see if it is in the letter_bank copy
//     --if the character is in the letter_bank copy, then we remove that character from the letter_bank copy
//     --if not, return False
// --return True indicating all letters in our word were in the letter_bank list

// returns: Boolean
// '''
export const usesAvailableLetters = (input, lettersInHand) => {
  for (let char of input) {
    const capitalChar = char.toUpperCase();
    if (lettersInHand.includes(capitalChar)) {
      lettersInHand.splice(lettersInHand.indexOf(capitalChar), 1);
    } else {
      return false;
    }
  }
  return true;
};

//DIDNT NEED A COPY OF lettersInHand in def above?

///DOCSTRING
// '''
// parameters:
// --string (word)
// this function scores the user word by:
// --sets a running total variable to 0
// --capitalizes the word
// --checks if the word is 7 characters or longer
//     --if so, adds 8 points total score
// --for each letter, gets the associated points from LETTER_SCORES and adds it to total
// returns: integer (total)
// '''

export const scoreWord = (word) => {
  const capitalWord = word.toUpperCase();
  let total = 0;
  if (word.length >= 7) {
    total += 8;
  }
  for (let letter of capitalWord) {
    total += letterScores[letter];
  }
  return total;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};

// highest_scoring_word = ""
// highest_score = 0

// for word in word_list:
//     word_score = score_word(word)
//     if word_score > highest_score:
//         highest_score = word_score
//         highest_scoring_word = word
//     elif word_score == highest_score:
//         if len(highest_scoring_word) == 10:
//             continue
//         elif len(word) == 10:
//             highest_scoring_word = word
//         elif len(word) < len(highest_scoring_word):
//             highest_scoring_word = word

// return highest_scoring_word , highest_score

//FROM PYTHON
// '''
//     parameters:
//     --list (word_list) of strings

//     this function gets the highest scoring word and its score by:
//     --initializes and sets empty string to highest_scoring_word
//     --initializes and sets empty score to highest_score
//     --for each word in the word_list, check if that word's score is higher than our current highest score
//         --if so, reassign highest_score to the score of that word and reassign the highest_scoring_word to that word
//     --if the score is equal to our highest_score
//         --run a tie breaker
//         --check to see if the length of the current highest_scoring_word is 10
//             --if so, return that word and score
//         --check to see if the length of the current word is 10
//             --if so, reassign highest_scoring_word to that word
//         --check to see if the length of the current word is less than our highest_scoring_word
//             --if so, reassign highest_scoring_wrod to that word

//     returns:
//     --string (highest scoring word)
//     --integer (highest score)
//     '''
