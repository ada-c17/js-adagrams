let letterPool = {
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
}
let letterScore = {
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



// makePool function will turn the object into an arrayPool
const makePool = () => {
  let arrayPool = [];
  for (let elem in letterPool){
    let freq = letterPool[elem];
  while (freq > 0) {arrayPool.push(elem);
                  freq -= 1;}}
  let arrayPoolCopy = []

 for (let i = 0; i < arrayPool.length; i++) {
  arrayPoolCopy[i] = arrayPool[i];
}
 return arrayPoolCopy
}


// Wave 1=>Build a hand of ten letters which are letters randomly taken from arrayPool

export const drawLetters = () => {
  let arrayPoolCopy = makePool();
  let drawn = []; 
  while (drawn.length < 10){
    let RandomLetter = arrayPoolCopy[Math.floor(Math.random() * arrayPoolCopy.length)];
    drawn.push(RandomLetter);
    arrayPoolCopy.splice(arrayPoolCopy.indexOf(RandomLetter),1);
  } 
  return drawn
}


// wave 2=>Check to see if every letter in input word is in the list of strings named(lettersIndrawn)in right quantities,returns True if everyletter is available.
export const usesAvailableLetters = (input, lettersIndrawn) => { 
  for (let i = 0 ; i<input.length; i++) 
  {if (!lettersIndrawn.includes(input[i]))
  {return false;
  }
  else{ lettersIndrawn.splice(lettersIndrawn.indexOf(input[i]),1); }
};
return true;
}



// Wave 3=>for each word given which is a string of characters, returns an integer which is the number of points of each letter(on the basis of the score chart and words with length 7/8/9/10 has 8 more points)

export const scoreWord = (word) => {
  let score=0;
  let wordLength=word.length
  if (!word){
   return 0
  }
  word=word.toUpperCase();
  for(let letter of word){score+=letterScore[letter];}
  if (wordLength > 6 && wordLength < 11){
    score += 8;}
  return score
   
  }
  
  
  // wave 4=> calculate which word in words(which is the only parameter of this function) has the highest score. Returns an object with the highest scoring word and its points. In the case of tie these are the rules:
  // 1- the word which is ten letters long wins 2- If there is no such word,shortest word will win 3-If no such words again, first word will win


  export const highestScoreFrom = (words) => { 
  let highestWordObject = { word: None, score: 0 };
  for (let word in words) {
    if (scoreWord(words[word]) > highestWordObject.score) {
      highestWordObject.word = words[word];
      highestWordObject.score = scoreWord(words[word]);
    } 
    else if (scoreWord(words[word]) === highestWordObject.score && words[word].length < highestWordObject.word.length && highestWordObject.word.length < 10) {
      highestWordObject.word = words[word];
      highestWordObject.score = scoreWord(words[word]);
    } 
    else if (scoreWord(words[word]) === highestWordObject.score && words[word].length === 10 && highestWordObject.word.length < 10) {
      highestWordObject.word = words[word];
      highestWordObject.score = scoreWord(words[word]);
  }
}
  return highestWordObject;}

