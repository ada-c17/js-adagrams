const scoreWord = (word) => {
  const letterValues = {
    "AEIOULNRST":1,
    "DG":2,
    "BCMP":3,
    "FHVWY":4,
    "K":5,
    "JX":8,
    "QZ":10,
  };
  let score = 0;

  for (let charIndex = 0; charIndex < word.length; charIndex++) {
    for (const letterGroup in letterValues) {
      if (letterGroup.includes(word.charAt(charIndex).toUpperCase())) {
        score += letterValues[letterGroup];
      }
    }
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score
};

const highestScoreFrom = (words) => {
  /* Return highest score [  object = {"word":word, "score":score}  ]
   * Tie cases:
   *    1. First prefer words that use 10 letters.
   *    2. Otherwise prefer shortest tied word.
   *    3. If all else is equal, pick first in list. */

  //assemble list of scores from list of words.  the two arrays will be index matched.
  let scores = [];

  for (const word of words) {
    scores.push(scoreWord(word));
  };

  //assemble list of max scoring words
  const maxScore = Math.max(...scores);
  maxScoringWords = [];
  for (const word of words) {
    if (scoreWord(word) === maxScore) {
      maxScoringWords.push(word);
    };
  };

  //return is length is one, else tie resolution
  if (maxScoringWords.length === 1) {
    return maxScoringWords[0];
  } else {

    //Compile a list of word lengths
    maxScoringWordLengths = [];
    for (const word of maxScoringWords) {
      maxScoringWordLengths.push(word.length);
    };

    //return first at length 10
    for (let i = 0; i < maxScoringWords.length; i++) {
      if (maxScoringWordLengths[i] === 10) {
        return maxScoringWords[i];
      };
    };

    //return first at min length
    const minLength = Math.min(...maxScoringWordLengths);
    for (let i = 0; i < maxScoringWords.length; i++) {
      if (maxScoringWordLengths[i] === minLength) {
        return maxScoringWords[i];
      };
    };
  };
};
