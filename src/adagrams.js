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
    for (let i = 0; i < LETTER_POOL[letter]; i++){
      letterDistribution.push(letter);
    }
  }

  // Pick 10 random letters from letterDistribution
  while (usersDraw.length < 10) {
    const randomIndex = Math.floor(Math.random()*letterDistribution.length);
    const randomLetter = letterDistribution[randomIndex];

    usersDraw.push(randomLetter);
    // Remove the selected letter from the letter distribution --> avoids picking it again
    letterDistribution.splice(randomIndex, 1);

  }

  return usersDraw;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const usersWord = input.toUpperCase();

  // Create shallow copy of lettersInHand
  const lettersInHandCopy = [...lettersInHand];

  let found = true;

  // Loop through input
  // if letter in input is present in lettersInHand --> remove letter
  // if not present, return false

  for (let letter in usersWord) {
    if (lettersInHandCopy.includes(usersWord[letter])) {
      // continue;
      // splice
      lettersInHandCopy.splice(usersWord[letter], 1)
      continue;
      // return true;
    }
    return false;
  }
  return true;



  // console.log(`users word: ${usersWord}`);
  // console.log(`letters drawn: ${lettersInHand}`);
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
