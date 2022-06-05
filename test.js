INP = 'taco';
LETS = ['A','B','D','W','A','T','A','C','O'];


const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    if (lettersInHand.includes(input.charAt(i).toUpperCase())) {
      charIndex = lettersInHand.indexOf(input.charAt(i));
      lettersInHand.splice(charIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};


console.log(usesAvailableLetters(INP, LETS));

for (let i = 0; i < INP.length; i++) {
    if (LETS.includes(INP.charAt(i).toUpperCase())) {
        charIndex = LETS.indexOf(INP.charAt(i));
        LETS.splice(charIndex, 1);
        console.log(i, charIndex)
    }
}
