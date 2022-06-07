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


export const drawLetters = () => {
  const arrayOfLetters = [];
  for (const [letter, quantity] of Object.entries(letterPool)) {
    for (let i=0; i<quantity; i++) {
      arrayOfLetters.push(letter);
    }
  }

  let currentHand = [];
  for (let i=0; i<10; i++) {
    let currentLetter = arrayOfLetters[Math.floor(Math.random() * arrayOfLetters.length)];
    currentHand.push(currentLetter);
    arrayOfLetters.splice(arrayOfLetters.indexOf(currentLetter), 1);
  }

  return currentHand
};

console.log(drawLetters)

export const usesAvailableLetters = (input, lettersInHand) => {
 
  let upperCaseWord = input.toUpperCase();
  
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
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
