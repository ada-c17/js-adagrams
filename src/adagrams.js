// HELPER FUNCTIONS
export const countTimes = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

export const tieBreaker = maxScore => {
  let winner = {
      word: '',
      score: 0
  };
  
  let smallestWordLen = 1000;
  
  for (let i = 0; i < maxScore.length; i++) {
      let nxtWord = maxScore[i][0];
      let nxtScore = maxScore[i][1];

      if (nxtWord.length === 10) {
          winner.word = nxtWord;
          winner.score = nxtScore;
          break;
      } else if (nxtWord.length < smallestWordLen) {
          console.log('Shorter word found');
          smallestWordLen = nxtWord.length;
          winner = {};
          winner.word = nxtWord;
          winner.score = nxtScore;
      } else {
          continue;    
      };
  };
  console.log(winner);
  return winner;
};


export const drawLetters = () => {
  // Implement this method for wave 1
  const letterPool = {
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

  let clone = JSON.parse(JSON.stringify(letterPool));
  let userHand = [];

  for (let i = 0; i <= 10; ++i) {
    const randNum = Math.floor(Math.random() * 26);
    const char = Object.keys(letterPool)[randNum];
    let letterCount = clone[char];

    if (letterCount === 0) {
      continue;
    } else {
      clone[char] -= 1;
      userHand.push(char);
    }
  }
  return userHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();
  
  for (const letter of input) {
      let rgxp = new RegExp(letter, "g");
      let letterCount = input.match(rgxp).length;
      let isFound = lettersInHand.includes(letter);
      if (isFound === true) {
          let bankCount = countTimes(lettersInHand, letter);
          if (letterCount <= bankCount) {
              continue ;
          } else {
              return false;
          }
      } else {
        return false;
  };
      
  };
  return true;
};

export const scoreWord = (input) => {
  // Implement this method for wave 3
  const letterVals = {
    "A": 1, 
    "B": 3, 
    "C": 3, 
    "D": 2, 
    "E": 1, 
    "F": 4, 
    "G": 2, 
    "H": 4, 
    "I": 1, 
    "J": 8, 
    "K": 5, 
    "L": 1, 
    "M": 3, 
    "N": 1, 
    "O": 1, 
    "P": 3, 
    "Q": 10, 
    "R": 1, 
    "S": 1, 
    "T": 1, 
    "U": 1, 
    "V": 4, 
    "W": 4, 
    "X": 8, 
    "Y": 4, 
    "Z": 10 
  }

  if (input === '') {
    return 0;
  }

  let finalScore = 0;
  input = input.toUpperCase();

  for (const letter of input) {
    let letterCount = letterVals[letter];
    finalScore += letterCount;
  };

  if (7 <= input.length) {
    finalScore += 8;
  };
  return finalScore;
  };

  export const highestScoreFrom = (words) => {
    // Implement this method for wave 4
    let winner = {
      word: '',
      score: 0
    }
    let maxScore = [["", 0]]
    
    for (const word of words) {
        let i = 0;
        let wordScore = 0;
        wordScore = scoreWord(word);
        
        if (wordScore > maxScore[i][1]) {
            maxScore = [];
            maxScore.push([word, wordScore]);
        } else if (wordScore == maxScore[i][1]) {
            maxScore.push([word, wordScore]);
        } else {
            continue;
        }
        i++;
    };
      
    if (maxScore.length > 1) {
        winner = tieBreaker(maxScore)
    } else {
        winner.word = maxScore[0][0];
        winner.score = maxScore[0][1];
        console.log(winner);
    }

    // return winner object (word & score as keys)
    return winner;
  };

/* def tie_breaker(max_score):
    tie = ["", 0]
    smallest_word_len = 1000
    

    for i in range(len(max_score)):
        word = max_score[i][0]
        score = max_score[i][1]
        length = len(word)

        if length == 10:
            # .clear() method removes all elements  from a list
            tie.clear()
            tie.append(word)
            tie.append(score)
            break
        elif length < smallest_word_len:
            smallest_word_len = length
            tie.clear()
            tie.append(word)
            tie.append(score)
        else:
            continue           

    return tie

def get_highest_word_score(word_list):
    word_score = 0
    winner_list = []
    max_score = [["", 0]]
    score_tuple = tuple() 

    for word in word_list:
        i = 0
        word_score = score_word(word)
        if word_score > max_score[i][1]:
            max_score.clear()
            max_score.append([word, word_score])
        elif word_score == max_score[i][1]:
            max_score.append([word, word_score])
        else:
            continue
        i += 1
    
    if len(max_score) > 1:
        tie = tie_breaker(max_score)
        score_tuple = tuple(tie)
    else:
        winner_list.append(max_score[0][0])
        winner_list.append(max_score[0][1])
        score_tuple = tuple(winner_list)

    return score_tuple */