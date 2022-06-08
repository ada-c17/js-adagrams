
const score_chart = {
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
}
export const drawLetters = () => {
  let LETTER_POOL = {
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
  // create a string that holds all the avaliable letters - including probability
  let playerHand = [];
  let alphabet = "";
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    alphabet += key.repeat(value);
  }

  // create 10 letters for the player hand
  // subtract the letter from avaliable letters
  while (playerHand.length < 10) {
    let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (LETTER_POOL[randomCharacter] === 0) {
      continue;
    } else {
      playerHand.push(randomCharacter);
      LETTER_POOL[randomCharacter] -= 1;
      alphabet.replace(randomCharacter, '');
    }
  }
  return playerHand;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  //function returns True if all letters in input are in lettersInHand

  let listOfLetters = lettersInHand.slice();
  let yourString = input.toUpperCase();
  let boolSet = new Set();
  //if letter is in lettersInHand, true is added to the set
  for (const char of yourString) {
    if (listOfLetters.includes(char)) {
      boolSet.add(true);
      const index = listOfLetters.indexOf(char);
      listOfLetters.splice(index, 1);
      // if letter is NOT in lettersInHand, false is added to the set 
    } else {
      boolSet.add(false);
    }
  }

  // determine if there is invalid letter or not by checking if false exist
  if (boolSet.has(false)) {
    return false;
  } else {
    return true
  }
};



export const scoreWord = (word) => {
  //calculates each score for each letter 
  let score = 0;

  for (const letter of word) {
    score += score_chart[letter.toUpperCase()]
  } if (word.length >= 7) {
    score += 8;
  }
  return score;
};


export const highestScoreFrom = (words) => {

  let score_list = [];
  let max_score = 0;
  let winning_word = "";
  for (let i = 0; i < words.length; i++) {
    let score = scoreWord(words[i]);
    let results = {};
    results["score"] = score;
    results["word"] = words[i];
    score_list.push(results);

    if (score > max_score) {
      max_score = score;
      winning_word = words[i];
    }
  }
  let winner = { "word": winning_word, "score": max_score };

  for (let item of score_list) {
    if (item["score"] === max_score && item["word"].length === 10) {
      winner = item;
      return winner;
    } else if (item["score"] === max_score && item["word"].length < winning_word.length) {
      winner = item;
    }
  }
  return winner;
};





