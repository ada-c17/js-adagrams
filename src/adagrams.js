import {
  LETTER_POOL,
} from "constants";

export const drawLetters = () => {
  let letterPool = {
    ...LETTER_POOL,
  };
  let hand = []

  const allKeys = Object.keys(letterPool);

  while (hand.length < 10) {
    let sumValues = 0;
    for (let key of allKeys) {
      sumValues += letterPool[key];
    }
    
    const randIntBetweenOneAndSumValues = Math.floor(Math.random() * sumValues + 1);

    let sumValuesUntilRandInt = 0;

    let keysIndex = 0;

    while (sumValuesUntilRandInt < randIntBetweenOneAndSumValues) {
      
      sumValuesUntilRandInt += letterPool[allKeys[keysIndex]];
      keysIndex++;
    }
    
    let letter = undefined
    
    if (sumValuesUntilRandInt > randIntBetweenOneAndSumValues) {
      letter = allKeys[keysIndex - 1];
    } else {
      letter = allKeys[keysIndex];
    }

    if (letterPool[letter] > 0) {
      hand.push(letter);
      letterPool[letter] -= 1;
    } 
  }
  return hand;
  }


export const usesAvailableLetters = (input, lettersInHand) => {
  const upperText = input.toUpperCase();

  let lettersInHandObj = {}

  for (handLetter of lettersInHand) {
    lettersInHandObj[handLetter] = 0
  }

  for (let letterKey of lettersInHandObj.keys()) {
    lettersInHandObj[letterKey] += 1
  }

  for (let letter of upperText) {
    if (!lettersInHand.includes(letter)) {
      return false;
    } else if (lettersInHandObj[letter] === 0) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
