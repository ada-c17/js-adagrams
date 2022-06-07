const letterPool = {
  A : 9,
  B : 2,
  C : 2,
  D : 4,
  E : 12,
  F : 2,	
  G : 3,	  
  H : 2,	  
  I : 9,	  
  J : 1,	  
  K : 1,	  
  L : 4,	  
  M : 2,
  N : 6,
  O : 8,
  P : 2,
  Q : 1,
  R : 6,
  S : 4,
  T : 6,
  U : 4,
  V : 2,
  W : 2,
  X : 1,
  Y : 2,	
  Z : 1,
};

const letterScores = {
  A : 1,
  B : 3,
  C : 3,
  D : 2,
  E : 1,
  F : 4,
  G : 2,
  H : 4,
  I : 1,
  J : 8,
  K : 5,
  L : 1,
  M : 3,
  N : 1,
  O : 1,
  P : 3,
  Q : 10,
  R : 1,
  S : 1,
  T : 1,
  U : 1,
  V : 4,
  W : 4,
  X : 8,
  Y : 4,
  Z : 10,
};


export const drawLetters = () => {
  const arrayOfLetters = [];

  for (let [letter, quantity] of Object.entries(letterPool)) {
    for (let i=0; i<quantity; i++) {
      arrayOfLetters.push(letter);
    }
  }

  const currentHand = [];

  for (let i=0; i<10; i++) {
    const currentLetter = arrayOfLetters[Math.floor(Math.random() * arrayOfLetters.length)];
    currentHand.push(currentLetter);
    arrayOfLetters.splice(arrayOfLetters.indexOf(currentLetter), 1);
  }

  return currentHand;
};

console.log(drawLetters)

export const usesAvailableLetters = (input, lettersInHand) => {
 
  const upperCaseWord = input.toUpperCase();
  
  for (let letter of upperCaseWord) {
    if (lettersInHand.includes(letter)) {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let totalScore = 0;

  if (word.length >= 7) {
    totalScore += 8
  }

  for (let letter of word.toUpperCase()){
    totalScore += letterScores[letter]
  } 
  return totalScore;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let winningWord = '';
  
  for (let word of words) {
    const scoreOfWord = scoreWord(word);

    if (scoreOfWord > highestScore){
      highestScore = scoreOfWord;
      winningWord = word;
    } else if (scoreOfWord === highestScore) {
      if (winningWord.length === 10){
        continue;
      } else if (word.length === 10) {
        winningWord = word;
      } else if (word.length < winningWord.length){
        winningWord = word;
      }
    }
  }
  return ({"word": winningWord, "score": highestScore});
};
