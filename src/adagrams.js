class Adagrams {
  constructor() {
    this.letterPool = {
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
    this.letterScores = {
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
    };
  }

  drawLetters() {
  /**
    parameters: none

    This function:
    --initializes a letters_list
    --copies the provided LETTER_POOLS frequency dictionary
    --turns it into a list of letters avaliable
    --randomly removes a letter from the letter_pool_list and appends it to the letter_list 10 times

    returns: letter_list which is a list of 10 letters
   */

  let letterPoolList = [];
  for (const [letter, count] of Object.entries(this.letterPool)){
    const subArray = Array(count).fill(letter);
    letterPoolList.push(...subArray);
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
  usesAvailableLetters (input, lettersInHand) {
      let result = true
      const lettersInHandObject = {}
      lettersInHand.forEach(letter => lettersInHandObject[letter] = (lettersInHandObject[letter] || 0) + 1);
  
      for(let character of input){
        character = character.toUpperCase();
        if (lettersInHandObject[character] > 0){
          lettersInHandObject[character]--;
        }else{
          result = false;
        }
      }
      return result
  };
  scoreWord (word) {
    let total = 0;
    word = word.toUpperCase();
  
    if (word.length >= 7){
      total += 8;
    }
  
    for (const letter of word){
      total +=this.letterScores[letter]
    }
    return total;
  };
  highestScoreFrom (words) {
    /**
         parameters:
      --list (word_list) of strings
  
      this function gets the highest scoring word and its score by: 
      --initializes and sets empty string to highest_scoring_word
      --initializes and sets empty score to highest_score
      --for each word in the word_list, check if that word's score is higher than our current highest score
          --if so, reassign highest_score to the score of that word and reassign the highest_scoring_word to that word
      --if the score is equal to our highest_score
          --run a tie breaker
          --check to see if the length of the current highest_scoring_word is 10
              --if so, return that word and score 
          --check to see if the length of the current word is 10
              --if so, reassign highest_scoring_word to that word
          --check to see if the length of the current word is less than our highest_scoring_word
              --if so, reassign highest_scoring_wrod to that word
  
      returns:
      --string (highest scoring word)
      --integer (highest score)
     */
    let highestScoringWord = "";
    let highestScore = 0;
  
    for (const word of words){
      const wordScore = this.scoreWord(word);
  
      if (wordScore > highestScore){
        highestScore = wordScore;
        highestScoringWord = word;
      } else if (wordScore === highestScore){
        if (highestScoringWord.length === 10){
          continue
        } else if (word.length === 10 || word.length < highestScoringWord.length){
          highestScoringWord = word
        }
      }
    }
    return {'word':highestScoringWord, 'score':highestScore}
  };
};

export default Adagrams;