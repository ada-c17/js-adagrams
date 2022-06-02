const LETTER_POOL = {"A":9,"B":2,"C":2,"D":4,"E":12,"F":2,"G":3,
                        "H":2,"I":9,"J":1,"K":1,"L":4,"M":2,"N":6,
                        "O":8,"P":2,"Q":1,"R":6,"S":4,"T":6,"U":4,
                        "V":2,"W":2,"X":1,"Y":2,"Z":1};

const scoreMap = {"A":1,"E":1,"I":1,"O":1,"U":1,"L":1,"N":1,
                  "R":1,"S":1,"T":1,"D":2,"G":2,"B":3,"C":3,
                  "M":3,"P":3,"F":4,"H":4,"V":4,"W":4,"Y":4,
                  "K":5,"J":8,"X":8,"Q":10,"Z":10};

export const objtoArr = startObj => {
  let endArr = [];              
  for (const [key, value] of Object.entries(startObj)) {
    for (let i = 0; i < value; i++) {
      endArr.push(key);
    }
  }
  return endArr;
}

const arrtoObj = startArr => {
  let endObj = {};
  startArr.forEach(char => {
    if (char in endObj) {
      endObj[char]++;
    } else {
      endObj[char] = 1;
    }
  })
  return endObj;
}

export const drawLetters = () => {
  let lettersArr = objtoArr(LETTER_POOL);
  let lettersArrLen = lettersArr.length;
  let drawnLettersMap = {};
  while (Object.values(drawnLettersMap).reduce((a, b) => a + b,0) < 10) {
    let randLetter = lettersArr[Math.floor(Math.random()*lettersArrLen)];
    while ((LETTER_POOL[randLetter] - drawnLettersMap[randLetter]) < 1) {
      randLetter = lettersArr[Math.floor(Math.random()*lettersArr.length)];
    }
    if (randLetter in drawnLettersMap) {
      drawnLettersMap[randLetter]++;
    } else {drawnLettersMap[randLetter] = 1;}
  };
  return objtoArr(drawnLettersMap);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let handFreqMap = arrtoObj(lettersInHand);
  for (const letter of input) {
    if (letter in handFreqMap && handFreqMap[letter] > 0) {
      handFreqMap[letter]--;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let wordArr = word.toUpperCase().split("");
  let score = wordArr.reduce((prevScore, curChar) => prevScore + scoreMap[curChar], 0);
  if (word.length > 6) {
    score += 8;
  }
  return score ? score : 0;
};

export const highestScoreFrom = (words) => {
  let wordScoreMap = {};
  for (const word of words) {
    let wordScore = scoreWord(word);
    if (wordScore in wordScoreMap) {
      wordScoreMap[wordScore].push(word);
    } else { wordScoreMap[wordScore] = [word];
    }
  }
  const maxScore = parseInt(Math.max.apply(null,Object.keys(wordScoreMap)));
  const maxWords = wordScoreMap[maxScore];
  if (maxWords.length > 1) {
    let minLen = 11;
    let minWord = [];
    for (const word of maxWords) {
      if (word.length === 10) {
        return {word: word, score: maxScore};
      } else if (minLen !== 10) {
        if (word.length < minLen) {
          minLen = word.length
          minWord = [word]
        } else if (word.length === minLen) {
          minWord.push(word);
        }
      }
    }
    return {word: minWord[0], score: maxScore};
  }
  return {word: maxWords[0], score: maxScore};
};