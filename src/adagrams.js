export const drawLetters = () => {
  // Implement this method for wave 1
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
  const letterPicked=[];
  const letterPoolCopy= {...LETTER_POOL};
  const letterPoolArray= Object.entries(letterPoolCopy);
  const letterPoolWithFrequency= letterPoolArray.map(letter => letter[0].repeat(letter[1])); 
  let fullLetterPool = letterPoolWithFrequency.join('').split('');
  let letter=''
  console.log(fullLetterPool);
  for (let i = 0; i < 10; i++) {
    letter = fullLetterPool[Math.floor(Math.random() * fullLetterPool.length)];
    letterPicked.push(letter);
    fullLetterPool.splice(fullLetterPool.indexOf(letter), 1);
  }
  return letterPicked
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = [...lettersInHand];
  input = input.toUpperCase();
  for (const letter of input) {
    if (lettersInHandCopy.includes(letter)){
      lettersInHandCopy.splice(lettersInHandCopy.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  const SCORE_CHART = {
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
    Z: 10
  };

  word = word.toUpperCase();
  let score = 0;
  for (const letter of word) {
    score += Number(SCORE_CHART[letter]);
  }
  if (word.length > 6 && word.length <= 10) {
    score += 8;
  } else if (word.length == 0) {
    return 0
  }
  return score
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let bestWordAndScore = {
    word :'',
    score : 0
  };
  // let bestScore = null;
  for (const word of words) {
    let score = scoreWord(word);
  
      if (bestWordAndScore.score === 0 || score > bestWordAndScore.score) {
        bestWordAndScore.score = score;
        bestWordAndScore.word=word;
      } else if (score === bestWordAndScore.score){
          if (word.length === 10 && bestWordAndScore.word.length !==10) {
            bestWordAndScore.word=word;
            bestWordAndScore.score=score;
          } else if (word.length === 10 && bestWordAndScore.word.length ===10){
            continue;
          }else if (word.length >= bestWordAndScore.word.length) {
            continue;
          } else if (word.length < bestWordAndScore.word.length && bestWordAndScore.word.length !==10){
            bestWordAndScore.word=word;
            bestWordAndScore.score=score;
          } 
      }  
  }
  return bestWordAndScore

};
