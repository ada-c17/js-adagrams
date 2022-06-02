const LETTER_POOL = [
  "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C","C", "D", "D", "D",
  "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F","G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];

export const drawLetters = () => {
  // Implement this method for wave 1
  const tenLetters = [];
	const uniqueIndex = [];
  while(tenLetters.length < 10) {
		let index = Math.floor((Math.random()*LETTER_POOL.length));
		if (!uniqueIndex.includes(index)) {
			uniqueIndex.push(index);
			tenLetters.push(LETTER_POOL[index]);
		}
  }
	return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const user_input = input.toUpperCase().split("");
  const isValid = user_input.every(val => lettersInHand.includes(val)
                  && user_input.filter(el => el === val).length
                  <= lettersInHand.filter(el => el === val).length);
  return isValid;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
