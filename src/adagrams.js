
const LETTER_POOL =  {
  A: 9, B: 2, C: 2, D: 4,E: 12,
  F: 2, G: 3, H: 2, I: 9, J: 1,
  K: 1, L: 4, M: 2, N: 6, O: 8,
  P: 2, Q: 1, R: 6, S: 4, T: 6,
  U: 4, V: 2, W: 2, X: 1, Y: 2,
  Z: 1
};
  // wave 1
export const drawLetters = () => {
  const letterPool=[];
  for (const [key, value] of Object.entries(LETTER_POOL)){
    for (let i = 0; i < value; i++){
      letterPool.push(key);
    }
  }
  //const drawnLetters=_.sample(letterPool, 10);
  const drawn=[];
  for (let i = 0; i < 10; i++){
    let index=Math.floor(Math.random()*letterPool.length)
    drawn.push(letterPool[index]);
    letterPool.splice(index, 1);
  }  
  return drawn;
};

//wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
  //transfer to a object since this reduces time complexity
  const myDic={};
  for (let ele of lettersInHand){
    if (ele in myDic){
      myDic[ele]++;
    }else{
      myDic[ele] = 1;
    }
  }
  //check if input is a subset
  input=input.toUpperCase();
  for (const letter of input){
    if (! myDic.hasOwnProperty(letter)|| myDic[letter] == 0){
    //why ! letter in myDic not work?
      return false;
    }else{
      myDic[letter]--;
    }
  }
  return true;
};
//wave 3
export const scoreWord = (word) => {
  if(!word || word.length === 0){
    return 0;
  }
  word = word.toUpperCase(); //switch to upper case
  const extraPoints=[7, 8, 9, 10]
  let point = extraPoints.includes(word.length)? 8: 0;
  const letterScore = {"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
          "D": 2, "G": 2,
          "B": 3, "C": 3, "M": 3, "P": 3,
          "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
          "K": 5,
          "J": 8, "X": 8,
          "Q": 10, "Z": 10};
  for (let letter of word){
    point+=letterScore[letter];
  }
  return point;
};

//wave 4
export const highestScoreFrom = (words) => {
  let winningWord = words[0];
  let highestScore = 0;
  for (let word of words){
    let score = scoreWord(word);
      if (score > highestScore){
        winningWord = word;
        highestScore = score;
      }else if(score == highestScore){
        
        winningWord = (winningWord.length !=10 &&(word.length == 10 || word.length < winningWord.length))? word: winningWord;
        
      }
  }
  return {word: winningWord, 
          score: highestScore};
};

