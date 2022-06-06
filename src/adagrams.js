import _, { map } from "underscore";

const lettersPool = {
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
const letterScore = {
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
  static drawLetters() {
    // Implement this method for wave 1
    // creating list to store all posibilities of each letter
    const lettersPoolList = [];
    for (let letter in lettersPool) {
      for (let index = 0; index < lettersPool[letter]; index++) {
        lettersPoolList.push(letter);
      }
    }

    // drawing 10 random letter into a list
    let randomLetter = _.sample(lettersPoolList, 10);
    return randomLetter;
  }

  static usesAvailableLetters(input, lettersInHand) {
    // Implement this method for wave 2
    // deep copy letterInHand
    let copyLetterInHand = lettersInHand.slice();

    // checking each char in input is available in letterInHand or not
    // if any char of input is not in letterInHand then return false
    // if all are available in letterInHand then return true
    for (let char of input) {
      if (!copyLetterInHand.includes(char.toUpperCase())) {
        return false;
      } else {
        copyLetterInHand.splice(
          copyLetterInHand.indexOf(char.toUpperCase()),
          1
        );
      }
    }
    return true;
  }

  static scoreWord(word) {
    // Implement this method for wave 3

    // validating return 0 if word is empty
    if (word === "") {
      return 0;
    }

    // finding total score of each char
    let totalScore = 0;
    for (let char of word) {
      totalScore += letterScore[char.toUpperCase()];
    }

    // adding additional score if the length of word is 7 to 10
    if (word.length > 6) {
      totalScore += 8;
    }
    return totalScore;
  }

  static highestScoreFrom(words) {
    // Implement this method for wave 1
    // finding max score of input words by using max buil-in function
    const maxScore = Math.max.apply(
      null,
      words.map((word) => Adagrams.scoreWord(word))
    );

    // finding all words that have value same as max score by using filter
    const bestScoreWords = words.filter(
      (string) => Adagrams.scoreWord(string) === maxScore
    );

    // finding best word base on the length of the word by returning in object
    // if it is single element in list of bestScoreWords then returning best word directly
    if (bestScoreWords.length === 1) {
      return {
        word: bestScoreWords[0],
        score: maxScore,
      };
    }

    // if it is tie and the length of the word is 10 then returning the first best word
    for (let bestWord of bestScoreWords) {
      if (bestWord.length === 10) {
        return {
          word: bestWord,
          score: maxScore,
        };
      }
    }

    // finding min length of word for comparing when the length of word is less 10
    const minWordLength = Math.min.apply(
      null,
      bestScoreWords.map((minWord) => minWord.length)
    );

    // if it is tie and the length of words is less then 10 then returning the fewest letters
    for (let minBestWord of bestScoreWords) {
      if (minBestWord.length === minWordLength) {
        return {
          word: minBestWord,
          score: maxScore,
        };
      }
    }
  }
}

export default Adagrams;
