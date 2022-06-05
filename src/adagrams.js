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

  for (const letter in usersWord) {
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

  let totalScore = 0;
  const extraPoints = [7, 8, 9, 10];

  if (!word) {
    return totalScore;

  } else {

    for (const letter of word.toUpperCase()){
      totalScore += scoreChart[letter];
    }
  
    // Bonus points
    if (extraPoints.includes(word.length)) {
      totalScore += 8;
    }
  
    return totalScore;
  }

};



export const highestScoreFrom = (words) => {
  /**
   * Input:
   *  - words: an array of strings
   * 
   * Output:
   *  - JS Object with winning word (string) and its score {word: "example", score: 0}
   * 
   * Tie Breaking Rules:
   *  1. Prefer the word with fewest letters
   *  2. Except if one word has ten letters, choose word with ten letters over 
   *      the word with fewer letters
   *  3. Multiple words with same score and same length? Choose the first one in the array
   */


  // Loop through words array
  // for each individual word --> call scoreWord, add individual word and score to JS object
  // Find key with shortest length
  // Find key with length of ten
  // go through JS object --> tie breaking stuff

  let winner = {
    word: "",
    score: 0
  };
  

  for (const word of words) {

    let calculatedScore = scoreWord(word);

    if (calculatedScore > winner["score"]) {

      winner["word"] = word;
      winner["score"] = calculatedScore;

      // If the scores are equal, there's a tie
    } else if (calculatedScore === winner["score"]) {

      // If the current winning word has a length of 10, it's still the winning word
      if (winner["word"].length === 10 && word.length < 10) {
        continue;

      // If the next word has a length of 10 and the current winning word doesn't, update the winning word
      } else if (word.length === 10 && winner["word"].length < 10) {
        winner["word"] = word;
        winner["score"] = calculatedScore;

      // If the next word has a length less than the current winning word, update
      } else if (word.length < winner["word"].length) {
        winner["word"] = word;
        winner["score"] = calculatedScore;
      }
    }
  }
  
  return winner;

}
