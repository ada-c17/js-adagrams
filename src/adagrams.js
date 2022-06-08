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
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    const randomLetters = (choices) =>
        choices[Math.floor(Math.random() * choices.length)];
    let hand = [];
    while (hand.length != 10) {
        let letter = randomLetters(letters);
        for (const [key, value] of Object.entries(letterPool)) {
            if (letter == key && value != 0) {
                letterPool[key] -= 1;
                hand.push(letter);
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
        //counts the number of letters in the input
        const count = obj[letter] || 0; //if the letter is not in the object, it will be set to 0
        return {...obj, [letter]: count + 1 }; //adds the letter to the object
    }, {});
    const letterCountLettersInHand = lettersInHand.reduce((obj, letter) => {
        //counts the number of letters in the hand
        const count = obj[letter] || 0; //if the letter is not in the object, it will be set to 0
        return {...obj, [letter]: count + 1 }; //adds the letter to the object
    }, {});
    for (const [letter, count] of Object.entries(letterCountGuessedLetters)) {
        //checks if the letter is in the hand
        if (count <= letterCountLettersInHand[letter]) {
            //if the letter is in the hand, true or false will be added to the boolean list
            booleanList.push(true);
        } else {
            booleanList.push(false);
        }
    }
    if (booleanList.every(Boolean)) {
        //if all the booleans are true, return true
        return true;
    } else {
        return false;
    }
};

export const scoreWord = (word) => {
    const scoreChart = {
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z'],
    };
    word = word.toUpperCase();
    let score = 0;
    if (word === '') {
        //if word is empty, return 0
        return score;
    }
    for (const letter of word) {
        //for each letter in word
        for (const [points, letters] of Object.entries(scoreChart)) {
            //for each letter in scoreChart
            if (letters.includes(letter)) {
                //if letter is in scoreChart
                score += parseInt(points); //add points to score
            }
        }
    }
    if (word.length >= 7) {
        score += 8;
    }
    return score;
};

export const highestScoreFrom = (words) => {
    const scores = {};
    for (const word of words) {
        let scoredWord = scoreWord(word);
        scores[word] = scoredWord;
    }
    const getMaxScore = (object) => {
        return Object.keys(object).filter((x) => {
            return object[x] == Math.max.apply(null, Object.values(object)); // get the max value
        });
    };
    const highestScoringWords = getMaxScore(scores);
    if (highestScoringWords.length > 1) {
        // get longest word
        const longestWord = highestScoringWords.reduce(function(a, b) {
            return a.length > b.length ? a : b;
        });
        // if the longest word is 10 characters long, return it - if there are more than one, return the first one
        if (longestWord.length === 10) {
            let tenLongWordCount = 0;
            const tenLongWords = [];
            for (const word of highestScoringWords) {
                if (word.length === 10) {
                    tenLongWordCount += 1;
                    tenLongWords.push(word);
                }
            }
            if (tenLongWordCount > 1) {
                // if there are more than one 10-letter words, return the first one
                return { word: tenLongWords[0], score: scoreWord(tenLongWords[0]) };
            } else {
                return { word: longestWord, score: scoreWord(longestWord) }; //
            }
        } else {
            // get shortest word
            const shortestWord = highestScoringWords.reduce((a, b) =>
                a.length <= b.length ? a : b
            );
            return { word: shortestWord, score: scoreWord(shortestWord) };
        }
    } else {
        // if there is only one word, return it
        return {
            word: highestScoringWords[0],
            score: scoreWord(highestScoringWords[0]),
        };
    }
};