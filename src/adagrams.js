const LETTER_POOL = {
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

const POINT_SCALE = {
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
  'Z': 10};

export const drawLetters = () => {
  // Implement this method for wave 1
  // Create a new list of all the elements of letter pool by their count

  const letterPool = letterBag();
  const hand = [];
  let counter = 0;

  // Randomly reorganize the letters in letter_bag
  while (counter < 10) {
    const shuffle = Math.floor(Math.random() * (letterPool.length - 1));
    const shuffleLetter = letterPool[shuffle];
    hand.push(shuffleLetter);
    letterPool.splice(shuffle, 
      shuffle);
    counter += 1;
  }
  return hand;
};

export  const letterBag = () => {
  let letterPool = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < count; i++) {
      letterPool.push(letter);
    }
  }
  return letterPool;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2 
  // indexOf returns the first index at which a given element can be found in the array
  for (const char of input) {
    if (!lettersInHand.includes(char)) {
      return false;
    } else {
      lettersInHand.splice(
        lettersInHand.indexOf(char),
        lettersInHand.indexOf(char)
      );
    }
  }
    return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let total = 0;
  if (word.length >= 7) {
    total += 8;
  }
  for (const char of word) {
    total += POINT_SCALE[char.toUpperCase()];
  }
  return total;
};

// Create a dictionary of the words from word_list and their scores 
export const highestScoreFrom = (words) => {
  const topWord = { word: '', score: 0,};
  for (const word of words) {
    const wordScore = scoreWord(word);

    if (wordScore > topWord['score']) {
      topWord['word'] = word;
      topWord['score'] = wordScore;
    } else if (wordScore === topWord['score']) 
    
    {
      if (
        topWord['word'].length !== 10 &&
        (word.length == 10 || word.length < topWord['word'].length)
      ) {
        topWord['word'] = word;
        topWord['score'] = wordScore;
      }
    }
  }
  return topWord;
};