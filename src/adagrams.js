const letterPool = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4, 
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1
};

const scoreChart = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

export const drawLetters = () => {
  let copyOfLetterPool = Object.assign({}, letterPool);
  const keysOfLetters = Object.keys(copyOfLetterPool);
  let currentHand = [];
  while (currentHand.length < 10) {
    let randomLetter = keysOfLetters[Math.floor(Math.random() * keysOfLetters.length)];
    if(copyOfLetterPool[randomLetter] > 0) {
      copyOfLetterPool[randomLetter] -= 1;
      currentHand.push(randomLetter);
    }
  }
  return currentHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterHandCopy = JSON.parse(JSON.stringify(lettersInHand));
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if(letterHandCopy.includes(letter)) {
      letterHandCopy.splice(letterHandCopy.indexOf(letter), 1);
    } else {
      return false;
    }
  } return true;
}

export const scoreWord = (word) => {
  word = word.toUpperCase();
  let score = 0;
  for (let letter of word) {
    for (let points in scoreChart) {
      if(scoreChart[points].includes(letter)) {
        score += Number(points);
      }
    }
  }
  if(word.length >= 7) {
    score += 8;
  }
  return score;
}


export const highestScoreFrom = (words) => {
  // create empty object and add words with scores using previous function
  let scores = {};
  for (let word of words) {
    let scoredWord = scoreWord(word);
    scores[word] = scoredWord;
  };
  // find highest score within the object
  const highestScore = Math.max(...Object.values(scores));
  // create array adding words in case there are words with same score
  let tyingWords = [];
  for (const word in scores) {
    if(scores[word] === highestScore) {
      tyingWords.push(word);
    }
  }
  /* set winning word to first word in tyingwords array
  if only one word in array then will be returned as the winning word */
  let winningWord = tyingWords[0];
  // iterate and check tying words array for words for words of length 10
  for (const word of tyingWords) {
    if(word.length === 10) {
      return {word: word, score: highestScore}
    } else if(word.length < winningWord.length) {
      winningWord = word;
    }
  }
  return {word: winningWord, score: highestScore} 
}
