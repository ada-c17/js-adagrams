const letterPool = {
    'A': 9,
    'B': 2,
    'C': 2,
    'D': 4,
    'E': 12,
    'F': 2,
    'G': 3,
    'H': 2,
    'I': 9,
    'J': 1,
    'K': 1,
    'L': 4,
    'M': 2,
    'N': 6,
    'O': 8,
    'P': 2,
    'Q': 1,
    'R': 6,
    'S': 4,
    'T': 6,
    'U': 4,
    'V': 2,
    'W': 2,
    'X': 1,
    'Y': 2,
    'Z': 1
}

// need to convert #'s back to int

const scoreDict = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
}
const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");





// Implement this method for wave 1
export const drawLetters = () => {
    const allLetters = []
    for (const [letter, frequency] of Object.entries(letterPool)) {
        for (let i = 0; i < frequency; i++) {
            allLetters.push(letter)
        }
    }

    const hand = []

    for (let i = 0; i < 10; i++) {
        const thisLetter = allLetters[Math.floor(Math.random() * allLetters.length)]
        hand.push(thisLetter)
        let letterIndex = allLetters.indexOf(thisLetter)
        allLetters.splice(letterIndex, 1)
    }
    return hand

};


// Implement this method for wave 2
export const usesAvailableLetters = (input, lettersInHand) => {
    const capsWord = input.toUpperCase();

    for (let letter of capsWord) {
        const test = lettersInHand[letter]
        if (lettersInHand.includes(letter)) {
            let letterIndex = lettersInHand.indexOf(letter)
            lettersInHand.splice(letterIndex, 1)
        } else {
            return false
        }
    }
    return true

};


// Implement this method for wave 3
export const scoreWord = (word) => {
    const input = word.toUpperCase();
    const input_array = input.split("");
    const n = input.length;
    let score = 0;
    for (let i = 0; i < n; i++) {
        let letter = input_array[i];
        if (alphabet.includes(letter)) {
            score += scoreDict[letter];
        }
    }
    if (n > 6 && n < 11) {
        score += 8;
    }
    return score;
};

// Implement this method for wave 4
export const highestScoreFrom = (words) => {

    const n = words.length;
    let winner = {
        word: "",
        score: 0,
    };

    for (let i = 0; i < n; i++) {
        if (scoreWord(words[i]) > winner.score) {
            winner = {
                word: words[i],
                score: scoreWord(words[i]),
            };
            //tie
        } else if (scoreWord(words[i]) === winner.score) {
            if (winner.word.length === 10) {
                winner = winner;
            } else if (words[i].length === 10) {
                winner = {
                    word: words[i],
                    score: scoreWord(words[i]),
                };
            } else if (words[i].length < winner.word.length) {
                winner = {
                    word: words[i],
                    score: scoreWord(words[i]),
                };
            }
        }
    }
    return winner;
};