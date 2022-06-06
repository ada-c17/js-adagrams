export const drawLetters = () => {
  const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // Implement this method for wave 1
  let frequency = [
    9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2,
    1,
  ];
  for (let i = 0; i < 26; i++) {
    for (let n = 1; n < frequency[i]; n++) {
      alphabetArray.push(alphabetArray[i]);
    }
  }
  let selection = [];
  for (var i = 0; selection.length < 10; i++) {
    let rand = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    if (selection.indexOf(rand) === -1) {
      selection.push(rand);
    }
  }
  return selection;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = [...lettersInHand];
  input = input.toUpperCase();
  let counter = 0;
  for (let letter of input) {
    if (lettersInHandCopy.includes(letter)) {
      lettersInHandCopy.splice(letter, 1);
      counter++;
    }
  }
  return counter == input.length;
};

export const scoreWord = (word) => {
  word = word.toUpperCase();
  let dict = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["k"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };
  let total = 0;
  for (let letter of word) {
    for (const [key, value] of Object.entries(dict)) {
      if (value.includes(letter)) {
        total += parseInt(key);
      }
    }
  }
  if (7 <= word.length && word.length <= 10) {
    total += 8;
  }
  return total;
};
// Implement this method for wave 3

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let maxScore = {
    word: "",
    score: 0,
  };
  let highestScore = 0;
  for (let word of words) {
    const score = scoreWord(word);
    if (score > highestScore) {
      highestScore = score;
      maxScore.word = word;
      maxScore.score = score;
    } else if (score === highestScore && maxScore.word.length !== 10) {
      if (word.length < maxScore.word.length) {
        maxScore.word = word;
      } else if (word.length === 10) {
        maxScore.word = word;
      }
    }
  }
  return maxScore;
};
