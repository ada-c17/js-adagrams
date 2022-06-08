const LETTER_POOL= {
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

const SCORE_CHART = {
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
  'P': 2, 
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

export const generateRandomLetter = function (){
  const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allLetters[Math.floor(Math.random() * allLetters.length)]
  
}
  
export const drawLetters = () => {
  let letters = [];
  let i = 0;
  let letterPool = {};
  const LETTER_POOL= {
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

  
  while (i < 10){ 
    let randomLetter = generateRandomLetter();
    if(letterPool[randomLetter] <= LETTER_POOL[randomLetter]){
      continue;
    }else if (letterPool[randomLetter]){
      letterPool[randomLetter] += 1;
      letters.push(randomLetter);
      i++;
    }else{
      letterPool[randomLetter] = 1;
      letters.push(randomLetter);
      i++;
    }
      
  };
  return letters 
};


export const usesAvailableLetters = (input, lettersInHand) => {
  let wordFreqMap = {};
  let lettersFreqMap = {};
  let newWord = input.toUpperCase().split("");
  // let upperCase = input.toUpperCase();

  newWord.forEach(item =>{
    if (wordFreqMap[item]){
      wordFreqMap[item] ++;
    }else{
      wordFreqMap[item]= 1;
    }
  return wordFreqMap 
  });
  
  lettersInHand.forEach(item =>{
    if (lettersFreqMap[item]){
      lettersFreqMap[item] ++;
    }else{
      lettersFreqMap[item]= 1;
    }
  })

  for (let letter in wordFreqMap){
    for( let char in lettersFreqMap){
      
      if(letter === char){
        if (wordFreqMap[letter] > lettersFreqMap[char] ){
        return false;
        }
      }
      else if (letter in lettersFreqMap === false){
        return false;
      }     
    }
  };

  for (let letter in wordFreqMap){
    if (letter in lettersFreqMap){
      return true;
    }  else {
      return false;
    }
    }
  };

    
export const scoreWord = (word) => {
  let capWord = word.toUpperCase()
  let totalScore = 0;
  
  if (capWord.length <1 ){
    return 0;
  }

  if(capWord.length >= 7 ){
    totalScore += 8;
  } 

  for (let letter of capWord){
      totalScore += SCORE_CHART[letter]
       }

  return totalScore
  };


// PSEUDO CODE
// STEP 1 : We'll build a helper function - a score dictionary that contains the word and score
// from all entries with the "word" as the key and the "score"
// as the value.  This function will call the 'scoreWord' function
// passing in the 'word' as a parameter for each existing word.
//  STEP 2 : The score dictionary with all scores and words is returned and passed into the
// function Highest score from.
// STEP 3 : Next we evaluate score dictionary to find the 
// max value in the score dictionary
// STEP 4 : We store the the key or "word" for the max value  and
// we store the value for the max score
// Step 5: We have identified one max value, but there may be more than 1.
// We must track the number of words in score dict with the max score 
// so that we can apply some logic to break tie.
// Step 6: If there is only one max score, we return the word:value and
// all is well.  If not then the fun begins 
// Step 7: Tie Breaking logic. Tie breaking rules require a preference
// for the fewest letters unless the # of letters === 10. Ten trumps
// them all so we need to find the length of the words with the max score
//  We can make a separate helper function to calculate and store word 
// lengths.
// We store those values and determine the winner(in this order).
//  A)if any have a length of 10 (Clear winner unless there's more than 
// one in which case, it would be the word supplied first, whew!)
//  B) Next, would be the word with the fewest letters is the winner.
// in case of tie in that respect, apply the rule listed in # A
// for that sort of tie-breaking. return result, Done!.
// 



    
export const BuildScoreDictionary = (words) => {
  let scoreDict = {};
  words.forEach(item =>{
    scoreDict[item] = scoreWord(item)
  return scoreDict;

  }
)};
export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
