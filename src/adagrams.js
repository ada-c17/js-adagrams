const SCORE_CHART = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
};

export const drawLetters = () => {
    const letterPool = {
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
    const letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    const randomLetters = (choices) =>
        choices[Math.floor(Math.random() * choices.length)];
    let hand = [];
    for (let i = 0; i < 10; ++i) {
        let letter = randomLetters(letters);
        // Added a label here to break so it wouldn't go through the whole pool
        // after adding the letter to the hand once it finds it in the pool
        handPlacement: for (const [key, value] of Object.entries(letterPool)) {
            if (letter == key && value > 0) {
                letterPool[key] -= 1;
                hand.push(letter);
                break handPlacement;
            }
        }
    }
    return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
    input = input.toUpperCase();
    const guessedLetters = Array.from(input);
    let booleanList = [];
    const letterCountGuessedLetters = guessedLetters.reduce((obj, letter) => {
        const count = obj[letter] || 0;
        return {...obj, [letter]: count + 1 };
    }, {});
    const letterCountLettersInHand = lettersInHand.reduce((obj, letter) => {
        const count = obj[letter] || 0;
        return {...obj, [letter]: count + 1 };
    }, {});
    for (const [letter, count] of Object.entries(letterCountGuessedLetters)) {
        if (count <= letterCountLettersInHand[letter]) {
            booleanList.push(true);
        } else {
            booleanList.push(false);
        }
    }
    if (booleanList.every(Boolean)) {
        return true;
    } else {
        return false;
    }
};

export const scoreWord = (word) => {
    // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
    // Implement this method for wave 1
};