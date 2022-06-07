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


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2


};

export const scoreWord = (word) => {
  // Implement this method for wave 3
//   let totalScore = 0;
//   if (word === ""){
//     return totalScore
//   }
//   let word = word.isUpperCase()
//   let wordList = word.split('');
//   for (letter of wordList){
//     for (let [key, value] in Object.entries(scoreChart)){
//       if (letter in value){
//         totalScore += key;
//       }
//     }
//   }
//   if(word.length in extraScoreChart){
//     totalScore += 8;
//   }
//   return totalScore
};



export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
