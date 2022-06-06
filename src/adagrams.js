// Following AirBnB's capital const rules on naming this
const LETTER_QUANTITY_CHART = {
  A: 9,
  N: 6,
  B: 2,
  O: 8,
  C: 2,
  P: 2,
  D: 4,
  Q: 1,
  E: 12,
  R: 6,
  F: 2,
  S: 4,
  G: 3,
  T: 6,
  H: 2,
  U: 4,
  I: 9,
  V: 2,
  J: 1,
  W: 2,
  K: 1,
  X: 1,
  L: 4,
  Y: 2,
  M: 2,
  Z: 1,
};

export const drawLetters = () => {
  // Implement this method for wave 1
  // populate letterArr with the letters for fair probability
  const letterArr = [];
  for (const [letter, quantity] of Object.entries(LETTER_QUANTITY_CHART)) {
    let counter = 0;
    while (counter < quantity) {
      letterArr.push(letter);
      counter++;
    }
  }

  // a loop that generates 10 random letters
  // after generating a single letter, it is added to the letterBank
  // and deleted off the letterArr for no repeated elements
  const letterBank = [];
  for (let i = 0; i < 10; i++) {
    let letterIndex = Math.floor(Math.random() * letterArr.length);
    letterBank.push(letterArr[letterIndex]);
    letterArr.splice(letterIndex, 1);
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // populate lettersInHandObj with keys/values
  const lettersInHandObj = {};
  for (const letter of lettersInHand) {
    if (letter in lettersInHandObj) {
      lettersInHandObj[letter]++;
    } else {
      lettersInHandObj[letter] = 1;
    }
  }

  // checks if letter of the input is in the lettersInHandObj
  // if so, subtracts 1 from the value
  // if not found at all, return false
  for (const letter of input) {
    if (letter in lettersInHandObj) {
      lettersInHandObj[letter]--;
    } else {
      return false;
    }
  }

  // checks if any of the values in lettersInHandObj less than 0
  for (const key in lettersInHandObj) {
    if (lettersInHandObj[key] < 0) {
      return false;
    }
  }
  return true;
};

const SCORE_CHART = {
  1: ['A', 'I', 'E', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const extraScoreChart = [7, 8, 9, 10];
  let totalScore = 0;

  if (!word) {
    return totalScore;
  }

  const scoreChartKeys = Object.keys(SCORE_CHART);

  for (const letter of word) {
    const score = scoreChartKeys.find((key) =>
      SCORE_CHART[key].includes(letter.toUpperCase())
    );
    totalScore += parseInt(score);
  }

  if (extraScoreChart.includes(word.length)) {
    totalScore += 8;
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  //def get_highest_word_score(word_list):
  //   word_scores = {}
  //   for word in word_list:
  //       word_scores[word] = score_word(word)
  //   highest_score_dict = {word:score for word, score in word_scores.items() if score == max(word_scores.values())}
  //   if len(highest_score_dict) == 1:
  //       return convert_dict_to_tuple(highest_score_dict)
  //   else:
  //       for word, score in sorted(highest_score_dict.items()):
  //           winning_word = {}
  //           shortest_word = min(len(x) for x in highest_score_dict.keys())
  //           if len(word) == 10:
  //               winning_word[word] = score
  //               return convert_dict_to_tuple(winning_word)
  //           elif len(word) == shortest_word:
  //               winning_word[word] = score
  //               return convert_dict_to_tuple(winning_word)
  // def convert_dict_to_tuple(highest_score_dict):
  //   highest_score_list = []
  //   for word, score in highest_score_dict.items():
  //       highest_score_list.append(word)
  //       highest_score_list.append(score
};
