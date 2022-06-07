
import _ from 'lodash';

const letterQuantityDict = {
  'A' : 9, 'N' : 6 ,
  'B' : 2, 'O' : 8, 
  'C' : 2, 'P' : 2, 
  'D' : 4, 'Q' : 1, 
  'E' : 12,'R' : 6,
  'F' : 2, 'S' : 4, 
  'G' : 3, 'T' : 6,
  'H' : 2, 'U' : 4,
  'I' : 9, 'V' : 2, 
  'J' : 1, 'W' : 2,
  'K' : 1, 'X' : 1, 
  'L' : 4, 'Y' : 2,
  'M' : 2, 'Z' : 1}

  const scoreChart = {
    1:["A","I","E","O","U","L","N","R","S","T"],
    2:["D","G"],
    3:["B","C","M","P"],
    4:["F","H","V","W","Y"],
    5:["K"],
    8:["J","X"],
    10:["Q","Z"]
}
const extraScoreChart = [7, 8, 9, 10]


export const drawLetters = () => {
  let letterList= [];
  for (let letter in letterQuantityDict){
    let counter = 0;
    while (counter < letterQuantityDict[letter]){
      letterList.push(letter);
      ++counter;
    }
  }
    let letterBank= _.sampleSize(letterList,10);
    return letterBank;
  };

  // Implement this method for wave 1
  export const usesAvailableLetters =(word,lettersInHand)=>{
  if (!word){
    return false
  }

  let letterDict = {}
  for (let letter of lettersInHand){
    if (letterDict[letter]){
      letterDict[letter] += 1;
    }else{
      letterDict[letter]= 1;
    }
  }
  for (let letter of word){
    if(!letterDict[letter]){
      return false;
    } else if (letterDict[letter]){
      letterDict[letter]-=1
      if (letterDict[letter]<0){
        console.log(false)
        return false
      }
    }
  }
  return true
}

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2


// };

export const scoreWord = (word) => {
  // Implement this method for wave 3
    if (!word){
    return 0
  }
  let totalScore = 0;
  let wordUpp = word.toUpperCase();
  let wordList = wordUpp.split('');
  for (let letter of wordList){
    for (let [key, value] of Object.entries(scoreChart)){
      // console.log(typeof key)
      if (value.includes(letter)=== true){
        totalScore += parseInt(key);
      }
    }
  }

  if (extraScoreChart.includes(word.length)){
    totalScore += 8;
  }
  return totalScore;
};



export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let wordScores = {};
  let ties = [];
  for (let word of words){
    wordScores[word]= scoreWord(word);
 }
 console.log(true)
let scores = Object.values(wordScores);
let maximum = Math.max(scores);
for (let [key,value] of Object.entries(wordScores)){
  if (value === maximum){
    ties.push(key);
  }
}

// let shortestTies = ties.sort((a,b)=>a.length -b.length)
//  if (wordScores.length ===1){
//    return makeDict(object.keys(wordScores[0])
//   } 
//    else{
//    for (let item of ties){
//      if( item.length === 10){
//        return makeDict(item);
//      }else{
//        return makeDict(object.keys(shortestTies[0]));
//      }
//    }
//  }

// };


// const makeDict= (word)=>{
//   let winningWord = {};
//   winningWord['word']=word;
//   winningWord['score']=scoreWord(word);
//   return winningWord;

// };


// We first need to score the words by placing them in a dictionary 
// then we will append the keys with the highest value to a list. 
// To break ties, we will take the longest word as the winner. If they are the same length, we sort the list by string length and return the first one. 