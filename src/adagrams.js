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

const POINT_SYSTEM = {
  'A':1,
  'B':3,
  'C':3,
  'D':2,
  'E':1,
  'F':4,
  'G':2,
  'H':4,
  'I':1,
  'J':8,
  'K':5,
  'L':1,
  'M':3,
  'N':1,
  'O':1,
  'P':3,
  'Q':10,
  'R':1,
  'S':1,
  'T':1,
  'U':1,
  'V':4,
  'W':4,
  'X':8,
  'Y':4,
  'Z':10
}


export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPoolCopy = Object.assign({}, LETTER_POOL);
  //const letter_pool_copy = {...LETTER_POOL} ; //spread syntax
  
  const lettersDrawn = [];
  const letterKeys = Object.keys(letterPoolCopy);

  while (lettersDrawn.length < 10){
    let random_letter = letterKeys[Math.floor(Math.random()*letterKeys.length)];
    if(letterPoolCopy[random_letter] >= 1){
      lettersDrawn.push(random_letter);
      letterPoolCopy[random_letter] -= 1;
    }
  }
  return lettersDrawn;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const inputUpper = input.toUpperCase();
  const countLetter = {};
  for (let l of lettersInHand){
    if (l in countLetter){
      countLetter[l] += 1;
    }else{
      countLetter[l] = 1;
    }
  }

  for (let char of inputUpper){
    if (char in countLetter && countLetter[char] >= 1){
      countLetter[char] -= 1;
    }else{
      return false;
    }
  }
  return true;

};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let total = 0;

  if (word.length === 0 || word === null) {
    return 0;
  }

  for (let w of word){
    total += POINT_SYSTEM[w.toUpperCase()];
  }

  if (word.length > 6 && word.length < 11){
    total += 8;
  }

  return total;

};

export const highestScoreFrom = (words) => {
  /* Pseudocode 
  1. iterate the array(words)
  2. update the max_score
  3. if score ties and max_word length is not 10:
    - fewer letters or 10th length -> max_score
  4. return highest object{"word": var, "score":var}
  */

  let max_score = 0;
  let max_word = "";
  //tie-breaking
  for (const w of words){
    let score = scoreWord(w);
    if (score > max_score) {
      max_score = score;
      max_word = w;
    }else if(score === max_score && max_word.length !== 10){
      if(w.length < max_word.length || w.length === 10){
        max_word = w;
      }
    }
  }
  return {"word":max_word, "score": max_score};
};
