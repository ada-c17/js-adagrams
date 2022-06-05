export const drawLetters = () => {
  // Implement this method for wave 1
  let letterPool = [];

  let letterFrequencies = {
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

  for (let letter in letterFrequencies) {
    for (let i = 0; i < letterFrequencies[letter]; i++){
      letterPool.push(letter);
    }
  }
  
  let hand = [];
  for (let i = 0; i < 10; i++) {
    let random = Math.random() * letterPool.length;
    random = Math.round(random);
    hand.push(letterPool[random]);
    letterPool.splice(random, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const handLetterFreq = {};
  for (let drawnLetter of lettersInHand) {
    if (handLetterFreq[drawnLetter]) {
      handLetterFreq[drawnLetter] += 1;
    } else {
      handLetterFreq[drawnLetter] = 1;
    }
  }

  const inputLetterFreq ={};
  for (let inputLetter of input) {
    if (inputLetterFreq[inputLetter]) {
      inputLetterFreq[inputLetter] += 1;
    } else {
      inputLetterFreq[inputLetter] = 1;
    }
  }

  for (let letter in inputLetterFreq) {
    if (letter in handLetterFreq) {
      if (inputLetterFreq[letter] > handLetterFreq[letter]){
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = {
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

  let score = 0;
  
  let numberOfLetters = 0;
  const uppercaseWord = word.toUpperCase();
  // track number of letters because punctuation could be in the string
  for (let letter of uppercaseWord) {
    score += scoreChart[letter];
    numberOfLetters += 1;
  }

  if (numberOfLetters >= 7 && numberOfLetters <= 10) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let highScore = 0;
  let highestScoringWord = '';

  for (const word of words) {
    let wordScore = scoreWord(word);
    if (wordScore > highScore){
      highScore = wordScore;
      highestScoringWord = word;
    } else if (wordScore === highScore && highestScoringWord.length != 10) {
        if (word.length === 10){
          highestScoringWord = word;
          highScore = wordScore;
        } else if (word.length < highestScoringWord.length) {
            highestScoringWord = word;
            highScore = wordScore;
        }
    }
  }

  return {'word': highestScoringWord, 'score': highScore};
};