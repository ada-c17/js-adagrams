const availableLetters = {
  'A': [9, 1],
  'B': [2,3], 
  'C': [2, 3], 
  'D': [4, 2], 
  'E': [12, 1], 
  'F': [2, 4], 
  'G': [3, 2], 
  'H': [2, 4], 
  'I': [9, 1], 
  'J': [1, 8], 
  'K': [1, 5], 
  'L': [4, 1], 
  'M': [2, 3], 
  'N': [6, 1], 
  'O': [8, 1], 
  'P': [2,3], 
  'Q': [1,10], 
  'R': [6,1], 
  'S': [4,1], 
  'T': [6,1], 
  'U': [4,1], 
  'V': [2,4], 
  'W': [2,4], 
  'X': [1,8], 
  'Y': [2,4], 
  'Z': [1,10]
}

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterHand = [];
  // const collect = require('collect.js');
  // const data = collect(picked_letter);

  while (letterHand.length < 10){
        // picked_letter = Math.floor(Math.random(Object.keys(available_letters)));
        const randomIndex = Math.floor(Math.random()*26);
        const letterList = Object.keys(availableLetters);
        const picked_letter=letterList[randomIndex];
        // picked_letter = Math.floor(Math.random(availableLetters.keys())*26)
        // check that letter hasn't exceeded available letter count
        // [....].reduce((total,x) => (x==2 ? total+1 : total), 0)
        let elementCount = letterHand.reduce((total,x) => (x==picked_letter ? total+1 : total) ,0);
        while (letterHand.length < 10){
          if (elementCount < availableLetters[picked_letter][0]){
              letterHand.push(picked_letter);
          }
        }
    return letterHand  
  }
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = [...lettersInHand];
  const word = input.toUpperCase
    for (let letter of word){
        if (letter in letter_bank_copy)
            letter_bank_copy.remove(letter);
        else
            return false
    return true
    }
  };

export const scoreWord = (word) => {
  // Implement this method for wave 3
  score = 0

  for (letter in word.toUpperCase())
      score += availableLetters[letter][1];
  
  if (word.length >= 7)
      score += 8;
  
  return score
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let scores = []
  let top_scoring_words = []

  for (word in word_list)
      word_score = score_word(word);
      scores.push(word_score);
  
  max_score = max(scores)

  // makes list of all words with the top score
  for (i in range(len(scores)))
      if (scores[i] === max_score)
          top_scoring_words.push(word_list[i]);

  let longest_word = Math.max(top_scoring_words, key=len)
  
  if (longest_word.length == 10)
      return [longest_word, max_score]
  else
      // finds shortest word with top score
      top_word = Math.min(top_scoring_words, key=len);
      return [top_word, max_score]
};
