export const drawLetters = () => {
  const letterPool = {
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
  let copiedPool = JSON.parse(JSON.stringify(letterPool));
  let chosenLetters = [];
  while (chosenLetters.length < 10) {
    const keys = Object.keys(copiedPool);
    let randomLetter = keys[Math.floor(Math.random() * keys.length)];
    if (copiedPool[randomLetter] > 0) {
      chosenLetters.push(randomLetter);
      copiedPool[randomLetter] -= 1;
    }
  }
  return chosenLetters;
};
export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i in input) {
    if (lettersInHand.includes(input[i])) {
      delete lettersInHand[i];
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const letterPoints = {
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
  if (word.length >= 7) {
    score += 8;
  }
  const casedWord = word.toUpperCase();
  for (var i = 0; i < word.length; i++) {
    score += letterPoints[casedWord[i]];
  }
return score;
};

export const highestScoreFrom = (words) => {
  var winner = { word: '', score: null };
  for (let i in words) {
    if (scoreWord(words[i]) > winner.score) {
      winner.word = words[i];
      winner.score = scoreWord(words[i]);
    } else if (scoreWord(words[i]) === winner.score && words[i].length < winner.word.length && winner.word.length < 10) {
      winner.word = words[i];
      winner.score = scoreWord(words[i]);
    } else if (scoreWord(words[i]) === winner.score && words[i].length === 10 && winner.word.length < 10) {
      winner.word = words[i];
      winner.score = scoreWord(words[i]);
  }
}
  return winner;
};
