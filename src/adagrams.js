export const drawLetters = () => {
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

  // Randomly draw 10 letters from the letter pool
  // Return: an array of ten string where each string is one letter

  const letterDistribution = [];
  const usersDraw = [];

  // Add letters to letterDistribution array
  for (const letter in LETTER_POOL){
    // console.log(letter);
    for (let i = 0; i < LETTER_POOL[letter]; i++){
      letterDistribution.push(letter);
    }
  }

  // Pick 10 random letters from letterDistribution
  // for (const i = 1; i <= 10; i++){
  //   let randomLet = letterDistribution[Math.floor(Math.random()*letterDistribution.length)];
  //   usersDraw.push(randomLet);

  // }

  while (usersDraw.length < 10) {
    let randomLet = letterDistribution[Math.floor(Math.random()*letterDistribution.length)];
    usersDraw.push(randomLet);
    
    // letterDistribution = delete letterDistribution[randomLet];
    // letterDistribution.splice(randomLet);
    // letterDistribution = letterDistribution.filter(function(alpha){
    //   return alpha != randomLet;
    // });

  }

  // console.log(letterDistribution);
  // console.log(usersDraw);
  return usersDraw;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
