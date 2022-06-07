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

const getHighestDict = (wordList) => {
  let highScore = 0;
  let highWords = []

  for (let word of wordList) {
    if (scoreWord(word) > highScore) {
      highScore = scoreWord(word);
      highWords = [word]
    } else if (scoreWord(word) === highScore) {
      highWords.push(word)
    };
  };
  
  return {
    wordList:highWords,
    score: highScore,
  };
};

const breakTie = (wordList) => {
  let smallestWordLength = 10;
  let winnerWord = undefined;
  
  // first word found using all ten letters is best word
  for (let word of wordList) {
    if (word.length === 10) {
      return word;
    } 
    // otherwise find the shortest word
    else if (word.length < smallestWordLength) {
      smallestWordLength = word.length;
      winnerWord = word;
    } 
    // if words are equal length choose the first word
    else {
      winnerWord = wordList[0];
    };
  };

  return winnerWord; 
};

export const highestScoreFrom = (words) => {
  const scoreToWordListDict = getHighestDict(words);

  let winnerWord = undefined;
  let maxScore = scoreToWordListDict['score'];
  let maxWords = scoreToWordListDict['wordList'];

  switch (maxWords.length) {
    case 1:
        winnerWord = maxWords[0];
      break;
    default:
      winnerWord = breakTie(maxWords);
  };

  const winnerObj = {
    word: winnerWord,
    score: maxScore,
  };

  return winnerObj;
};
