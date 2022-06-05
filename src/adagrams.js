export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTER_POOL = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };
  const letterPicked=[];
  const letterPoolCopy= {...LETTER_POOL}
  const letterPoolArray= Object.entries(letterPoolCopy);
  const letterPoolWithFrequency= letterPoolArray.map(letter => letter[0].repeat(letter[1])); 
  let fullLetterPool = letterPoolWithFrequency.join('').split('');
  let letter=''
  console.log(fullLetterPool);
  for (let i = 0; i < 10; i++) {
    letter = fullLetterPool[Math.floor(Math.random() * fullLetterPool.length)];
    letterPicked.push(letter);
    fullLetterPool.splice(fullLetterPool.indexOf(letter), 1);
  }
  return letterPicked
};






// export const drawLetters = () => {
//   // Implement this method for wave 1
//   const lettersCopy = { ...LETTERS };
//   const hand = [];
//   const letterArr = Object.keys(lettersCopy);
//   for (let i = 0; i < 10; i++) {
//     const letter = letterArr[Math.floor(Math.random() * letterArr.length)];

//     if (lettersCopy[letter] > 0) {
//       lettersCopy[letter] -= 1;
//       hand.push(letter);
//     } else {
//       i -= 1;
//     }
//   }
//   return hand;
// };


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
