// Declare variables and initialize DOM elements
const userInput = document.getElementById('userInput');
const sentenceDisplay = document.getElementById('sentence');
const scoreDisplay = document.getElementById('score');

// Define sentences
const sentences = [
    "The quick brown fox jumped over the lazy dog",
    "Peter Piper picked a peck of pickled peppers",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "She sells seashells by the seashore",
    "The sun rises in the east and sets in the west",
    "An apple a day keeps the doctor away",
    "Life is like a box of chocolates, you never know what you're gonna get",
    "To be or not to be, that is the question",
    "All that glitters is not gold",
    "The early bird catches the worm"
];

// Initialize the game when the start button is clicked
function startGame() {
    scoreDisplay.textContent = 'Score'
    userInput.value = '';
    const startTime = getTime();
    const sentence = getSentence();

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const endTime = getTime();
            const { speed, difference, score } = updateScore(sentence, userInput.value, startTime, endTime);
            displayScore(speed, difference, score);
        }
    });
}

// Get a random sentence and display it
function getSentence() {
    const sentenceNumber = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[sentenceNumber];
    sentenceDisplay.textContent = sentence;
    return sentence;
}

// Update the score and return speed, difference, and score
function updateScore(sentence, userInput, startTime, endTime) {
    const difference = compareSentences(sentence, userInput);
    const speed = (endTime - startTime) / 1000;
    const speedWeight = -400.5;
    const mistakesWeight = -550;
    const startNumber = 100000;
    const score = startNumber + (speedWeight * speed) + (difference * mistakesWeight);
    return { speed, difference, score };
}

// Display the score
function displayScore(speed, difference, score) {
    scoreDisplay.textContent = `Your time was ${speed.toFixed(2)}s, and you had ${difference} mistakes. Your score is ${score.toFixed(2)}`;
}

// Get the current time in milliseconds
function getTime() {
    return Date.now();
}

// Compare the user input with the given sentence and return the number of differences
function compareSentences(sentence, inputValue) {
    let difference = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== inputValue[i]) {
            difference += 1;
        }
    }
    return difference;
}
