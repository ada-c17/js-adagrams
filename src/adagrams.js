class Adagrams {
  constructor() {
    this.letterFreq = {"A":9,"B":2,"C":2,"D":4,"E":12,"F":2,"G":3,
                        "H":2,"I":9,"J":1,"K":1,"L":4,"M":2,"N":6,
                        "O":8,"P":2,"Q":1,"R":6,"S":4,"T":6,"U":4,
                        "V":2,"W":2,"X":1,"Y":2,"Z":1};
    this.letterScore = {"A":1,"E":1,"I":1,"O":1,"U":1,"L":1,"N":1,
                          "R":1,"S":1,"T":1,"D":2,"G":2,"B":3,"C":3,
                          "M":3,"P":3,"F":4,"H":4,"V":4,"W":4,"Y":4,
                          "K":5,"J":8,"X":8,"Q":10,"Z":10};
    this.numLetters = 10;
    this.bonusScore = 8;
    this.bonusScoreSize = 7;
  }

  drawLetters() {
    let lettersArr = this.objtoArr(this.letterFreq);
    let drawnLetters = [];
    while (drawnLetters.length < 10) {
      const randIndex = Math.floor(Math.random()*lettersArr.length);
      const randLetter = lettersArr.splice(lettersArr[randIndex],1)[0]; 
      drawnLetters.push(randLetter);
    }
    return drawnLetters;
  };

  usesAvailableLetters(input, lettersInHand) {
    let handFreqMap = this.arrtoObj(lettersInHand);
    for (const letter of input) {
      if (letter in handFreqMap && handFreqMap[letter] > 0) {
        handFreqMap[letter]--;
      } else {
        return false;
      }
    }
    return true;
  };

  scoreWord(word) {
    let wordArr = word.toUpperCase().split("");
    let score = wordArr.reduce((prevScore, curChar) => prevScore + this.letterScore[curChar], 0);
    return word.length < this.bonusScoreSize ? score : score + this.bonusScore;
  };

  highestScoreFrom(words) {
    let maxScore = 0;
    let maxWord = "";
    for (const word of words) {
      const wordScore = this.scoreWord(word);
      if (wordScore > maxScore) {
        maxScore = wordScore;
        maxWord = word;
      } else if (wordScore === maxScore) {
        if ((maxWord.length !== 10 && word.length < maxWord.length) || (word.length === 10 && word.length > maxWord.length)) {
          maxWord = word;
        }
      }
    }
    return {word: maxWord, score: maxScore};
  }

  objtoArr(startObj) {
    let endArr = [];              
    for (const [key, value] of Object.entries(startObj)) {
        for (let i = 0; i < value; i++) {
            endArr.push(key);
        }
    }
    return endArr;
  }

  arrtoObj(startArr) {
    let endObj = {};
    startArr.forEach(char => {
        if (char in endObj) {
            endObj[char]++;
        } else {
            endObj[char] = 1;
        }
    })
    return endObj;
  }
};

export default Adagrams;