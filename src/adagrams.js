

export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTERPOOL = {
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

  let letterHand = [];
  let letterObj = {...LETTERPOOL};
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while (letterHand.length < 10) {
    let randomNumber = Math.floor(Math.random() * 26);
    let randomLetter = alphabet.charAt(randomNumber);
    if (letterObj[randomLetter] > 0) {
      letterHand.push(randomLetter);
      letterObj[randomLetter] -= 1;
    }
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let availableLetters = [...lettersInHand];
  if (input.length > lettersInHand.length) {
    return false;
  } 
  let upperCaseInput = input.toUpperCase();
  let inputSet = new Set(upperCaseInput);
  let handSet = new Set(lettersInHand);

  const extraLetters = (inputSet - handSet);
  if (extraLetters.length > 0) {
    return false;
  }

  for (let i in upperCaseInput) {
    if (availableLetters.includes(upperCaseInput[i]) === false) {
      return false
    } else {
      let letterIndex = availableLetters.indexOf(upperCaseInput[i]);
      availableLetters.splice(letterIndex, 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };
  let wordScore = 0;

  if (word === ''){
    return 0;
  }else {
    const upperCaseWord = word.toUpperCase();
    if (word.length >= 7) {
      wordScore += 8;
    }
    for (let i in upperCaseWord) {
      let currentLetter = upperCaseWord[i];
      wordScore += scoreChart[currentLetter];
    }
    return wordScore;
  }
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  // ****old python adagrams code(for reference)****
  //   score_list = []
  //   tuple_list = []
  //   for word in word_list:
  //       word_tuple = word, score_word(word)
  //       tuple_list.append(word_tuple)
  //       score_list.append(score_word(word))

  //   # finding max score
  //   max_score = max(score_list)
  //   max_index_list = [i for i, score in enumerate(score_list) \
  //       if score == max_score]

  //   if len(max_index_list) == 1:
  //       return tuple_list[max_index_list[0]]
  //   else:
  //       small_word_length = 10
  //       for word, score in tuple_list:
  //           if score == max_score:
  //               if len(word) == 10:
  //                   return word, score
  //               else:
  //                   if len(word) < small_word_length:
  //                       small_word_length = len(word)
  //       for word, score in tuple_list:
  //           if small_word_length == len(word):
  //               return word, score
  // ****old python adagrams code******

  // input: words--array of strings
  // output: single object, winning word: { word : "word", score: 0 }
  //    --where 0 is score of word

  // if tie: if one word has 10 letters, return that word. else:
  //    if all words whose score = max are of equal length:
  //      return word that comes first out of the words list
  //   else: 
  //      return word with shortest length

  // HERE'S THE PLAN (maybe):
  // create winningWord object just to have it and return it.
  // create empty list to store words with winning scores
  // initialize variable to hold max score
  // loop through input list (forEach?) and apply wordScore() to each.
  // initialize variable to hold currentScore (possibly not needed but
  //    hard to visualize rn)
  // within the above forEach loop if (currentScore > maxScore) {
  //     maxScore = currentScore;
  // }
  // loop again through words. (forEach again? there's deffo a better way to do this)
  //    if wordScore(word) === MaxScore, winningWordList.push(word)
  // if winningWordList.length === 0, winningWord[word] = wordScore(word).
  //  else loop through winningWordList. 
  //  if a word has 10 letters, return word.
  //  else if each length is equal, return word at index that comes first. 
  //  else return min of winningWordList.
  let winningWord = {};

  return winningWord;
};
