import { SCORE_CHART, LETTER_POOL } from "constants";

//creates letter pool
export const createLetterPool = () => {
  let letterPool = [];
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterPool.push(key);
    }
  }
  return letterPool;
};

//shuffles letter pool
export const drawLetters = () => {
  let letterPool = createLetterPool();
  let letterPoolDeepCopy = JSON.parse(JSON.stringify(letterPool));
  function shuffleArray(letterPoolDeepCopy) {
    for (let i = 0; i < letterPoolDeepCopy; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  let letterBank = letterPoolDeepCopy.slice(0, 10);
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letters = 0; letters < input.length; letters++) {
    let char = input[letters];
    if (lettersInHand.includes(char) === false) {
      return false;
    } else if (lettersInHand.includes(char)) {
      lettersInHand.splice(char[letters], 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  //iterate through DOG
  for (let char = 0; char < word.length; char++) {
    let input = word[char];
    if (input.toUpperCase() in SCORE_CHART) {
      score += SCORE_CHART[input.toUpperCase()];
    }
  }
  if (word.length > 6 && word.length < 11) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let maxScore = 0;
  let highScoreWord = "";

  for (let word = 0; word < words.length; word++) {
    let input = words[word];
    let wordScore = scoreWord(input);
    if (wordScore > maxScore) {
      maxScore = wordScore;
      highScoreWord = input;
    } else if (wordScore === maxScore) {
      let wordLen = input.length;
      let highScoreWordLen = highScoreWord.length;
      {
        if (
          highScoreWordLen !== 10 &&
          (wordLen === 10 || wordLen < highScoreWordLen)
        ) {
          highScoreWord = input;
        }
      }
    }
  }
  return { score: maxScore, word: highScoreWord };
};
// def get_highest_word_score(word_list):
//     max_score = 0
//     high_score_word = None

//     for word in word_list:
//         word_score = score_word(word)
//         if word_score > max_score:
//             max_score = word_score
//             high_score_word = word
//         elif word_score == max_score:
//             word_len = len(word)
//             high_score_word_len = len(high_score_word)
//             # if the high score word length is not 10 AND current word length is 10 OR
//             # if high score word length is not 10 AND current word length is less than high score word length
//             # current word is the highest scoring word
//             if high_score_word_len != 10 and (word_len == 10 or word_len < high_score_word_len):
//                 high_score_word = word

//     return (high_score_word, max_score)
