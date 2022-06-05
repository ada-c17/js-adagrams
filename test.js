// |            Letter            | Value |
// | :--------------------------: | :---: |
// | A, E, I, O, U, L, N, R, S, T |   1   |
// |             D, G             |   2   |
// |          B, C, M, P          |   3   |
// |        F, H, V, W, Y         |   4   |
// |              K               |   5   |
// |             J, X             |   8   |
// |             Q, Z             |  10   |



// const word = "fiction"
//
// if (word.includes('f')) {
//     console.log(`${word} contains 'f'`)
// }




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

console.log(scoreWord(""))
