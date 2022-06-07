const letterCount = {
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

const letterValue = {
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

class Adagrams {
  
  static letterPool() {
    // using the object.keys to get the array string of letters
    let key = Object.keys(letterCount);

    // create the array of letters
    let letterPool = [];

    key.forEach((letter) => {
      for (let i = 0; i < letterCount[letter]; i++) {
        // getting the values how many times string letter appear in the array
        // EX: X: 2 -> ['X', 'X]
        letterPool.push(letter);
      }
    });
    return letterPool;
  };

  static drawLetters() {
    // create an empty array
    let handLetters = [];
    // create a copy and using 3 dot and new set method in array so we don't get the duplicate letters
    let letterPoolCopy = [...Adagrams.letterPool()];
    // using for to print 10 array of string letters
    for (let i = 0; i < 10; i++) {
      // set the copy length to the letters
      let letters = letterPoolCopy.length;
      let i = Math.floor(letters * Math.random());
      // remove entry from letter_pool at index, add to letters array
      handLetters.push(letterPoolCopy[i]);
      letterPoolCopy.splice(i, 1);
    }
    return handLetters;
  };

  static usesAvailableLetters(input, lettersInHand) {
    // using split to separate letter string input
    const array = input.split("");
    // create a copy of lettersInHand and also using the 3 dots
    let lettersInHandCopy = [...lettersInHand];
    // iterate over the length of the input
    for (let i = 0; i < input.length; i++) {
      // set the string of array to the letter
      let letter = array[i];
      // checking the string if it is found in the copy
      if (lettersInHandCopy.includes(letter)) {
        // getting the index of letter in the copy
        let word = lettersInHandCopy.indexOf(letter);
        // remove at index, add to letters array
        lettersInHandCopy.splice(word, 1);
      } else {
        // return false if there's no show in the lettersInHand
        return false;
      }
    }
    // return true if every letter in the input word is available in the lettersInHand
    return true;
  };

  static scoreWord(word) {
    let key = Object.keys(letterCount);
    // set the word to be uppercase and make sure it is strings
    const input = word.toString().toUpperCase();
    // using the split for array string words
    const input_array = input.split("");
    // set length of input to variable numWords
    const numWords = input.length;
    // starting points for score
    let score = 0;
    // iterate over the length of word
    for (let i = 0; i < numWords; i++) {
      // set string letters of array to variable letter
      let letter = input_array[i];
      // checking if the letter is found in the key(array of string letters)
      if (key.includes(letter)) {
        // create the object of letterValue with points at global scope
        // add points to score every letter uses
        score += letterValue[letter];
      }
    }
    // checking if the length of word is 7-10
    if (numWords > 6 && numWords < 11) {
      // get additional 8 points
      score += 8;
    }
    // return score points
    return score;
  };

  static highestScoreFrom(words) {
    // initialize the words length to variable numWords
    const numWords = words.length;
    // create object of word and score for winner
    // we want to return the object with word of string and score is number
    let winner = {
      word: "",
      score: 0,
    };

    // iterate over the words length
    for (let i = 0; i < numWords; i++) {
      // checking if score num words is greater than winner score
      if (Adagrams.scoreWord(words[i]) > winner.score) {
        winner = {
          word: words[i],
          score: Adagrams.scoreWord(words[i]),
        };
        // the tiebreaker
      } else if (Adagrams.scoreWord(words[i]) === winner.score) {
        // if the top score tie between multiple words
        if (winner.word.length === 10) {
          winner = winner;
          // if two words are same length
        } else if (words[i].length === 10) {
          winner = {
            word: words[i],
            score: Adagrams.scoreWord(words[i]),
          };
        } else if (words[i].length < winner.word.length) {
          winner = {
            word: words[i],
            score: Adagrams.scoreWord(words[i]),
          };
        }
      }
    }
    return winner;
  };
}

export default Adagrams;
