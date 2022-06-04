export const drawLetters = () => {
  /**
   * Input: no parameters
   * 
   * Output: Array of ten strings where each string is one letter
   * 
   * The array represents the player's hand of letters
   */

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
  /**
   * Input
   *  - input = some input word as a string
   *  - lettersInHand = array of ten strings where each string is one letter
   * 
   * Output: true or false
   *  - true if every letter from input is in lettersInHand
   *  - false if a letter from input is NOT in lettersInHand 
   *      or if too many letters compared to lettersInHand
   */

  const usersWord = input.toUpperCase();

  // Create shallow copy of lettersInHand
  const lettersInHandCopy = [...lettersInHand];

  // Loop through input
  // if letter in input is present in lettersInHand --> remove letter
  // if not present, return false

  for (let letter in usersWord) {
    if (lettersInHandCopy.includes(usersWord[letter])) {
      lettersInHandCopy.splice(usersWord[letter], 1)
      continue;
    }
    return false;
  }
  return true;

};

export const scoreWord = (word) => {
  /**
   * Input:
   *  - word = string of characters
   * 
   * Output:
   *  - integer representing number of points
   * 
   * Words with lengths 7, 8, 9, or 10 gets an additional 8 points
   */
  
  const scoreChart = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3, 
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  }

  const inputWord = word.toUpperCase();

  let totalScore = 0;

  for (let letter of inputWord){
    // console.log(letter);
    if (scoreChart.hasOwnProperty(letter)) {
      // console.log(scoreChart[letter]);
      totalScore += scoreChart[letter];
    }
    // console.log(`NO`);
  }
  // console.log(usersScore);

  const extraPoints = [7, 8, 9, 10];

  if (extraPoints.includes(inputWord.length)) {
    totalScore += 8;
  }

  // console.log(totalScore);
  return totalScore;

};





export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
