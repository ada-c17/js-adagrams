class Adagrams {
    constructor(letterQuants, letterPoints) {
        this.letterQuants = letterQuants;
        this.letterPoints = letterPoints;
    }

    drawLetters = () => {
        const letterPool = [];
        for (const letter in this.letterQuants) {
            for (let i = 0; i < this.letterQuants[letter]; i++) {
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

    usesAvailableLetters = (input, lettersInHand) => {
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

    scoreWord = (word) => {
        let score = 0;
        for (const char of word) {
            score += this.letterPoints[char.toUpperCase()];
        }
        if (word.length >= 7 && word.length <= 10) {
            score += 8;
        }
        return score;
    };

    highestScoreFrom = (words) => {
        let maxWord = words[0];
        let maxScore = this.scoreWord(words[0]);
        for (const word of words) {
            const score = this.scoreWord(word);
            if (score > maxScore) {
                maxScore = score;
                maxWord = word;
            } else if (
                score === maxScore &&
                maxWord.length !== 10 &&
                (word.length < maxWord.length || word.length === 10)
            ) {
                maxWord = word;
            }
        }
        return {
            word: maxWord,
            score: maxScore,
        };
    };
}

export default Adagrams;
