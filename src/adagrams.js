export const drawLetters = () => {
  const alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // Implement this method for wave 1
  let frequency = [
    9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2,
    1,
  ];
  for (let i = 0; i < 26; i++) {
    console.log(i);
    console.log(frequency[i]);
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

  console.log(selection);
  return selection;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  if (input != input.toUpperCase()) {
    input = input.toUpperCase();
  }

  console.log(input);
  let counter = 0;

  for (let letter of input) {
    if (lettersInHand.includes(letter)) {
      lettersInHand.splice(letter,1)
      counter++;
    }
    console.log(counter);
  }
  return counter == input.length;
};

export const scoreWord = (word) => {
  
  if (word != word.toUpperCase()) {
    word = word.toUpperCase();
  }
  let dict = {
    1:["A","E","I","O","U","L","N","R","S","T"],
    2:["D","G"],
    3:["B", "C", "M", "P"],
    4:["F", "H", "V", "W", "Y"],
    5: ["k"],
    8:["J","X"], 10:["Q","Z"]
  };    
  let total = 0;
  for (let letter of word) {
    for (const [key,value] of Object.entries(dict)) {
      if (value.includes(letter)) {
      console.log(key)
      total += parseInt(key);
      }
    }
  } 
  if (7 <= word.lenght <= 10) {
    total += 8;
  }
console.log(total);
return total;
};
  // Implement this method for wave 3
// };

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
