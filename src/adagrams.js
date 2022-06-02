const createLetterPoolArray = () => {
  // letter_pool_list = []
  //   for letter, frequency in LETTER_POOL.items():
  //       for i in range(frequency):
  //           letter_pool_list.append(letter)

  //   return letter_pool_list
  const letterQuantities = {
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
  let letterPoolArray = [];
  for (const [letter, quantity] of Object.entries(letterQuantities)) {
    for (let i = 0; i < quantity; i++) {
      letterPoolArray.push(letter);
    }
    console.log(letterPoolArray);
  }
  return letterPoolArray;
};

createLetterPoolArray();

// export const drawLetters = () => {
//   // Implement this method for wave 1
//   // letter_pool_list = create_letter_pool_list(LETTER_POOL)
//   //   current_hand = []
//   //   for i in range(10):
//   //       pool_index = random.randint(0, len(letter_pool_list)-1)
//   //       draw_letter = letter_pool_list[pool_index]
//   //       current_hand.append(draw_letter)
//   //       letter_pool_list.remove(draw_letter)
//   //   return current_hand
// };

// export const usesAvailableLetters = (input, lettersInHand) => {
//   // Implement this method for wave 2
// };

// export const scoreWord = (word) => {
//   // Implement this method for wave 3
// };

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 1
// };
