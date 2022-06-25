const availableLetters = {
  'A': [9, 1],
  'B': [2,3], 
  'C': [2, 3], 
  'D': [4, 2], 
  'E': [12, 1], 
  'F': [2, 4], 
  'G': [3, 2], 
  'H': [2, 4], 
  'I': [9, 1], 
  'J': [1, 8], 
  'K': [1, 5], 
  'L': [4, 1], 
  'M': [2, 3], 
  'N': [6, 1], 
  'O': [8, 1], 
  'P': [2,3], 
  'Q': [1,10], 
  'R': [6,1], 
  'S': [4,1], 
  'T': [6,1], 
  'U': [4,1], 
  'V': [2,4], 
  'W': [2,4], 
  'X': [1,8], 
  'Y': [2,4], 
  'Z': [1,10]
}

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterHand = [];
  while (letterHand.length < 10){
        // picked_letter = Math.floor(Math.random(Object.keys(available_letters)));
        const randomIndex = Math.floor(Math.random()*26);
        const letterList = Object.keys(availableLetters);
        const picked_letter=letterList[randomIndex];
        const elementCount = letterHand.reduce((total,x) => (x==picked_letter ? total+1 : total) ,0);
        if (elementCount < availableLetters[picked_letter][0]){
              letterHand.push(picked_letter);
          }
    }
    return letterHand  
};

export const usesAvailableLetters = (input,lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = [...lettersInHand];
  let result = true;
  // const word = input.toUpperCase()
  for (const char of input){
    if (lettersInHandCopy.includes(char)===true){
      const index = lettersInHandCopy.indexOf(char);
      lettersInHandCopy.splice(index,1);
      result = true;
    } else {
      result = false;
      return result;
    }
  }
  return result 
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (word.length == 0){
    score = 0;
    return score;
  }
  for (const letter of word.toUpperCase()){
    score += availableLetters[letter][1];
  }
  if (word.length >= 7 && word.length <= 10) {
      score += 8;
  }
  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let scores = []
  let topScoringWords = []
  let lgth = 0;
  let longestWord;

  for (let word of words){
      let wordScore = scoreWord(word);
      scores.push(wordScore);
// Loop to find the longest word
        if (word.length > lgth){
          lgth = word.length;
          longestWord = word;
        }
  }
  let maxScore = Math.max(...scores);
  // makes list of all words with the top score
  for (let i = 0; i < scores.length; i++){
      if (scores[i] === maxScore){
          topScoringWords.push(words[i]);
      }
  }
  if (longestWord.length === 10){ 
    return {"score": maxScore,"word":longestWord}
  } else {
      // finds shortest word with top score
      let topWord = topScoringWords.reduce((a,b) => a.length <= b.length ? a:b);
      return {"score": maxScore, "word":topWord}
  }
};