export const drawLetters = () => {
  const letterPool = [
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "C",
    "C",
    "D",
    "D",
    "D",
    "D",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "E",
    "F",
    "F",
    "G",
    "G",
    "G",
    "H",
    "H",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "I",
    "J",
    "K",
    "L",
    "L",
    "L",
    "L",
    "M",
    "M",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O",
    "P",
    "P",
    "Q",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "S",
    "S",
    "S",
    "S",
    "T",
    "T",
    "T",
    "T",
    "T",
    "T",
    "U",
    "U",
    "U",
    "U",
    "V",
    "V",
    "W",
    "W",
    "X",
    "Y",
    "Y",
    "Z",
  ];

  const lettersInHand = [];
  for (let i = 0; i < 10; i++) {
    const idx = Math.floor(Math.random() * letterPool.length);
    const randomLetter = letterPool[idx];
    lettersInHand.push(randomLetter);
    letterPool.splice(idx, 1);
  }

  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const userInput = input.toUpperCase().split("");
  for (const letter of userInput) {
    if (lettersInHand.includes(letter)) {
      lettersInHand.splice(letter, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const scoreChart = {
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
    Z: 10,
  };

  const userInput = word.toUpperCase().split("");
  let totalPoints = 0;
  for (const letter of userInput) {
    if (letter in scoreChart) {
      totalPoints += scoreChart[letter];
    }
  }
  if (userInput.length > 6 && userInput.length < 11) {
    totalPoints += 8;
  }
  return totalPoints;
};

export const highestScoreFrom = (words) => {
  const wordsLen = words.length;
  let highScore = {
    word: "",
    score: 0,
  };

  for (let i = 0; i < wordsLen; i++) {
    let selectedWord = words[i];
    // executes if current word score is higher than the current highest score
    if (scoreWord(selectedWord) > highScore.score) {
      highScore = {
        word: selectedWord,
        score: scoreWord(selectedWord),
      };
      // loop entered if current word score is tied with current highest score
    } else if (scoreWord(selectedWord) === highScore.score) {
      // in tie situation, checks if existing highest scoring word is 10 letters long & if so, keep as highest score
      if (highScore.word.length === 10) {
        highScore = highScore;
        // in tie situation, if current word is 10 letters long, it is new highest scoring word
      } else if (selectedWord.length === 10) {
        highScore = {
          word: selectedWord,
          score: scoreWord(selectedWord),
        };
        // in tie situation, if no words are 10 letters long, shortest word wins
      } else if (selectedWord.length < highScore.word.length) {
        highScore = {
          word: selectedWord,
          score: scoreWord(selectedWord),
        };
      }
    }
  }
  return highScore;
};
