
var LETTERQUANTITY = {
  letters: [
    {letter: "A", quantity: 9},
    {letter: "B", quantity: 2},
    {letter: "C", quantity: 2},
    {letter: "D", quantity: 4},
    {letter: "E", quantity: 12},
    {letter: "F", quantity: 2},
    {letter: "G", quantity: 3},
    {letter: "H", quantity: 2},
    {letter: "I", quantity: 9},
    {letter: "J", quantity: 1},
    {letter: "K", quantity: 1},
    {letter: "L", quantity: 4},
    {letter: "M", quantity: 2},
    {letter: "N", quantity: 6},
    {letter: "O", quantity: 8},
    {letter: "P", quantity: 2},
    {letter: "Q", quantity: 1},
    {letter: "R", quantity: 6},
    {letter: "S", quantity: 4},
    {letter: "T", quantity: 6},
    {letter: "U", quantity: 4},
    {letter: "V", quantity: 2},
    {letter: "W", quantity: 2},
    {letter: "X", quantity: 1},
    {letter: "Y", quantity: 2},
    {letter: "Z", quantity: 1},
  ]
};

export const drawLetters = () => {
  let letterBank = [];
  let counter = 10;
  let letters = LETTERQUANTITY.letters;
  while (counter > 0) {
    //let rand_i = parseInt(Math.random() * (91 - 65) + 65);
    //let letter = String.fromCharCode(rand_i);
    let randI = Math.floor(Math.random()* letters.length);
    //console.log(randI);

    if (letters[randI].quantity === 0) {
      continue;
    }

    let quantity = letters[randI].quantity - 1;
    letters[randI].quantity = (quantity * 1);
    letterBank.push(letters[randI].letter);
    counter -= 1;
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {

  for (let letter of input) {
    if (lettersInHand.includes(letter.toUpperCase())) {
      let i = lettersInHand.indexOf(letter.toUpperCase());
      lettersInHand.splice(i, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {

  let letterPoints = {
    "A":1, "B":3, "C":3, "D":2, "E":1, "F":4, "G":2, "H":4, "I":1, "J":8, "K":5, "L":1,
    "M":3, "N":1, "O":1, "P":3, "Q":10, "R":1, "S":1, "T":1, "U":1, "V":4, "W":4, "X":8,
    "Y":4, "Z":10
    };

  let totalPoints = 0;

  for (let letter of word) {
    if (Object.keys(letterPoints).includes(letter.toUpperCase())) {
      totalPoints += letterPoints[letter.toUpperCase()];
    }
  }

  if (word.length >= 7 && word.length <= 10) {
    totalPoints += 8;
  }

  return totalPoints;
};

export const highestScoreFrom = (words) => {
  let scoreDict = {};

  for (let word of words) {
    scoreDict[word] = scoreWord(word);
  }

  let maxScoreWords = [];
  let maxScore = Math.max(...Object.values(scoreDict));
  for (let word of words) {
    if (scoreDict[word] == maxScore) {
      maxScoreWords.push(word);
    }
  }

  let winningWord = {};
  if (maxScoreWords.length == 1) {
    winningWord = { word: maxScoreWords[0] , score: maxScore};
  } else if (maxScoreWords.filter(word => word.length == 10).length > 0) {
    
    for (let w of maxScoreWords.filter(word => word.length == 10)) {
      winningWord = {word: w, score: maxScore};
      break;
    }
  } else {
    let sortedMaxScoreWords = maxScoreWords.sort((a, b) => a.length - b.length);
    let mini = sortedMaxScoreWords[0];
    for (let w of maxScoreWords) {
      if (w == mini) {
        winningWord = {word: w, score: maxScore};
        break;
      }
    }
  }
  return winningWord;
};
