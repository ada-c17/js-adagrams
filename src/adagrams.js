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

const LETTER_SCORE = {
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
    let myLetters =[]
    let listOfLetters = []
  
    for (let key in LETTER_POOL){
      for (let i = 0; i < LETTER_POOL[key]; i++){
        listOfLetters.push(key)
      }
    }
    while (myLetters.length < 10){
      let letterPick = Math.floor(Math.random() * listOfLetters.length)
      let removed = listOfLetters.splice(letterPick,1)
      myLetters = myLetters.concat(removed)
      
    }
    return myLetters
  };

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
    let aCopy = [...lettersInHand]
    // let aCopy = listCopy(lettersInHand)
    console.log(aCopy)
    for (let i = input.length - 1; i >= 0; --i){
      if (aCopy.includes(input[i].toUpperCase())){
        console.log(input[i])
        aCopy.splice(i,1)
        console.log(aCopy)
      } else {
        return false
      }
    }
    return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0
  for (let letter of word.toUpperCase()){
    score += LETTER_SCORE[letter]
  }
  if (word.length >= 7) {
    score += 8
  }
  return score
};



export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let highestScore = 0
  let winningWord = ""

  for (let word of words) {
    if(scoreWord(word) > highestScore){
      highestScore = scoreWord(word)
      winningWord = word
    } else if (scoreWord(word) === highestScore){ 
        if (word.length === 10 && winningWord.length !== 10){
          winningWord = word
        } if (word.length < winningWord.length && winningWord.length){
          winningWord !== word
        } else if (word.length < winningWord.length){
          winningWord = word
        }
    }
  } 
  return (winningWord, highestScore)
};


