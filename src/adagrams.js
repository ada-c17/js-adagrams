export const drawLetters = () => {
    const letterQuants = {
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
    const letterPool = [];
    for (const letter in letterQuants) {
        for (let i = 0; i < letterQuants[letter]; i++) {
            letterPool.push(letter);
        }
    }
    let letterCount = 0;
    const hand = [];
    while (letterCount < 10) {
        const randIndex = Math.floor(Math.random() * letterPool.length);
        const letter = letterPool.splice(randIndex, 1)[0];
        hand.push(letter);
        letterCount++;
    }
    return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
    for (let i = 0; i < input.length; i++) {
        const letter = input[i].toUpperCase();
        if (lettersInHand.includes(letter)) {
            const letterIndex = lettersInHand.indexOf(letter);
            lettersInHand.splice(letterIndex, 1);
        } else {
            return false;
        }
    }
    return true;
};
const letterPoints = {
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
};

export const scoreWord = (word) => {
    let score = 0;
    for (const char of word) {
        score += letterPoints[char.toUpperCase()];
    }
    if (word.length >= 7 && word.length <= 10) {
        score += 8;
    }
    return score;
};

export const highestScoreFrom = (words) => {
    // Implement this method for wave 1
};
