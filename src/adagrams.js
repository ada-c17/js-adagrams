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

const SCORE_CHART = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

export const drawLetters = () => {
  let myLetterArray = [];
  for (const key in LETTER_POOL){
    for (let i = 0; i < LETTER_POOL[key]; i++){
      myLetterArray.push(key);
    }
  }
  const lettersInHand = []
  for (let i = 0; i < 10; i++){
    const randomLetter = myLetterArray[Math.floor(Math.random() * myLetterArray.length)];
    lettersInHand.push(randomLetter);
    const index = myLetterArray.indexOf(randomLetter);
    myLetterArray.splice(index, 1);
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandObj = {}
  for (let i = 0; i < lettersInHand.length; i++){
    if (lettersInHand[i] in lettersInHandObj){
      lettersInHandObj[lettersInHand[i]] += 1;
    } else {
      lettersInHandObj[lettersInHand[i]] = 1;
    }
  }

  const inputWord = input.toUpperCase();
  let inputWordObj = {}
  for (let i = 0; i < inputWord.length; i++){
    if (inputWord[i] in inputWordObj){
      inputWordObj[inputWord[i]] += 1;
    } else {
      inputWordObj[inputWord[i]] = 1;
    }
  }
  for(const key in inputWordObj){
    if (!(key in lettersInHandObj)){
      return false;
    }
    if (inputWordObj[key] > lettersInHandObj[key]){
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const playerWord = word.toUpperCase();
  const additionalLengthCheck = [7, 8, 9, 10];
  const lengthPoints = 8;
  let score = 0;
  for (const char of playerWord){
    if (char in SCORE_CHART){
      score += SCORE_CHART[char];
    }
  }
  if (additionalLengthCheck.indexOf(playerWord.length) !== -1){
    score += lengthPoints;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  if (words.length === 0){
    return 0;
  }

  let resultChart = words.map(word => {
    return {
      word: word,
      score: scoreWord(word)
    };
  });

  const scores = resultChart.map(object => object.score);
  const maxScore = Math.max(...scores);
  const bestResults = resultChart.filter(object => object.score >= maxScore);
  for (const result of bestResults){
    if (result.word.length === 10){
      return result;
    }
  }
  const length = bestResults.map(object => object.word.length);
  const minLength = Math.min(...length);
  const minLengthWord = bestResults.filter(object => object.word.length === minLength);
  return minLengthWord[0];
};
