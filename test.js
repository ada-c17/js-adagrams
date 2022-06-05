const LETTER_POOL = {
  E: 12,
  Z: 1,
};

const makeLetterArray = function (letterDict) {
  let letterArray = []
  for (const letter in letterDict) {
    for (let i = 0; i < letterDict[letter]; i++) {
      letterArray.push(letter)
    }
  }
  return letterArray
}


const drawLetters = () => {
  const drawnLetters = []
  const letterArray = makeLetterArray(LETTER_POOL);
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * letterArray.length);
    drawnLetters.push(letterArray[randomIndex]);
    letterArray.splice(randomIndex, 1);
  }
  return drawnLetters;
};

console.log(drawLetters())
