// Random Integer Range
// To create a random integer number between two values (inclusive range), you can use the following formula:

// Math.floor(Math.random()*(b-a+1))+a;
// Where a is the smallest number and b is the largest number that you want to generate a random number for.

// console.log(Math.floor(Math.random()*(25-10+1))+10);

const LETTER_POOL = {
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

const SCORE_CHART = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  let newPool= [];
  // 'use strict';
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i=0; i < count; i++) {
      newPool.push(letter);
    }  
  } 

  let letters = [];
  while (letters.length < 10) {
    let draw = newPool[Math.floor(Math.random()*newPool.length)];

    let letter = newPool.pop(draw);
    letters.push(letter)

  }  
  return letters
  
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  let uppercaseWord = input.toUpperCase()
  let lettersInHandCopy = lettersInHand.slice()
  
  for (let char of uppercaseWord){
      if (lettersInHandCopy.includes(char)){
        const index = lettersInHandCopy.indexOf(char);
        if (index > -1) {
          lettersInHandCopy.splice(index, 1); // 2nd parameter means remove one item only
        }
        // lettersInHandCopy.removeChild(char)
      } else {
          return false
      }
  }
  return true
    
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let totalScore = 0
  if (word === '') {
    return totalScore
  }
  
  for (let char of word.toUpperCase()){
    totalScore += SCORE_CHART[char]
  }
  if (word.length > 6){
  totalScore += 8
  }

  return totalScore

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1

  let topScore = 0;
  let winner = '';
  for (let word of words) {
      let score = scoreWord(word)
      if (score > topScore){
        topScore = score;
          winner = word;
      } else if (score === topScore && winsTie(word, winner)){
          winner = word
      }
  }
  return {word: winner, score: topScore}


};

const winsTie = (word, winner) => {
    if (word.length === winner.length || winner.length === 10){
    
        return false
    }
    return word.length < winner.length || word.length === 10
};
