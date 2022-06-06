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
'Z': 1};

const scoresChart = {
  "A": 1, "C": 3, "B": 3, "E": 1, "D": 2, "G": 2, 
  "F": 4, "I": 1, "H": 4, "K": 5, "J": 8, "M": 3, 
  "L": 1, "O": 1, "N": 1, "Q": 10, "P": 3, "S": 1, 
  "R": 1, "U": 1, "T": 1, "W": 4, "V": 4, "Y": 4, 
  "X": 8, "Z": 10
};

export const drawLetters = () => {
  let letterPoolTwo = [];

  for (const [key,value] of Object.entries(letterPool)){
    const letterNum = Array(value).fill(key);
    letterPoolTwo = letterPoolTwo.concat(letterNum);
  }

  const letterSelection = [];
  for(let i = 0; i < 10; i++){
    let letter = letterPoolTwo[Math.floor(Math.random() * letterPoolTwo.length)];
    letterSelection.push(letter);
    letterPoolTwo.splice(letterPoolTwo.indexOf(letter), 1);
  }

  return letterSelection;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  for(let char of input){
    const upperChar = char.toUpperCase();
    if(lettersInHand.includes(upperChar)){
      lettersInHand.splice(lettersInHand.indexOf(upperChar), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const upperWord = word.toUpperCase();
  let score = 0;
  if(word.length >= 7){
    score += 8;
  }

  for(let letter of upperWord){
    score += scoresChart[letter];
  }

  return score;

};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let highestScoreWord = "";

  for(let word of words){
    const wordScores = scoreWord(word);
    if(wordScores > highestScore){
      highestScore = wordScores;
      highestScoreWord = word;
    } else if(wordScores === highestScore){
      if(highestScoreWord.length === 10){
        continue;
      } else if(word.length === 10){
        highestScoreWord = word;
      } else if(word.length < highestScoreWord.length){
        highestScoreWord = word;
      }
    }
  }

  const winWord = { word: highestScoreWord, score: highestScore };
  return winWord;
};
