// if the word is 10





export const highestScoreFrom = (words) => {
  const winScore = {
    "word": words[0],
    "score": 0 
  }
  for (let i = 1; i < words.length; i++) {
    scoring = scoreWord(words[i])
    if (scoring > winScore["score"]){
      winScore["score"] = scoring
      winScore["word"] = words[i]
    }
    // if there is a tie
    else if (scoring === winScore["score"]){
      // and the words length is 10
      if (words[i].length === 10) {
        winScore["score"] = scoring
        winScore["word"] = words[i]
        return winScore;
      }
      // and the word is shorter than the previous one
      else if (words[i].length < winScore["word"].length) {
        winScore["score"] = scoring
        winScore["word"] = words[i]
      }
    }
  }
};