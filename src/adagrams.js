import {
  LETTER_POOL,
  LETTER_SCORES
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

  for (let handLetter of lettersInHand) {
    if (Object.keys(lettersInHandObj).indexOf(handLetter) === -1) {
      lettersInHandObj[handLetter] = 1;
    } else {
      lettersInHandObj[handLetter] += 1;
    }
  }

  for (let letterKey of upperText) {
    if (Object.keys(lettersInHandObj).indexOf(letterKey) === -1) {
      return false;
    } else {lettersInHandObj[letterKey] -= 1;
    };
  };

  for (let key of upperText) {
    if (lettersInHandObj[key] < 0) {
      return false;
    };
  };
  return true;
};

export const scoreWord = (word) => {
  let total = 0;
  let upperWord = word.toUpperCase();

  for (let letter of upperWord) {
    total += LETTER_SCORES[letter];
  }

  if (upperWord.length >= 7) {
    total += 8;
  }

  return total;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
