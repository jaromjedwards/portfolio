// Declare variables and initialize DOM elements
const userInput = document.getElementById('userInput');
const sentenceDisplay = document.getElementById('sentence');
const scoreDisplay = document.getElementById('score');

// Initialize the game when the start button is clicked
function startGame() {
    userInput.value = '';
    const startTime = getTime();
    const sentence = getSentence();

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const endTime = getTime();
            const { speed, sentenceScore } = updateScore(sentence, userInput.value, startTime, endTime);
        }
    });
}

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

// Get a random sentence and display it
function getSentence() {
    const sentenceNumber = Math.floor(Math.random() * sentences.length);
    const sentence = sentences[sentenceNumber];
    sentenceDisplay.textContent = sentence;
    return sentence;
}

// Update the score and display it
function updateScore(sentence, userInput, startTime, endTime) {
    const difference = compareSentences(sentence, userInput);
    // const isCorrect = (userInput === sentence);
    const speed = (endTime - startTime);
    const speedWithDecimal = (speed / 1000).toFixed(2);
    // const correctSentenceScore = 10;
    // const incorrectSentenceScore = -10;
    const speedWeight = -400; // Use a negative value for higher scores with faster speed.
    const mistakesWeight = -550;
    const startNumber = 100000

    // Calculate the score with a negative speedWeight for higher scores with faster speed.
    // let score = speedWeight * speed + sentenceScore - (difference * mistakesWeight);
    let score = startNumber + (speedWeight * speedWithDecimal) + (difference * mistakesWeight);
    console.log(speedWeight * speedWithDecimal)
    console.log(difference * mistakesWeight)
    // score won't be lower than 0
    // score = (score < 0) ? 0 : score
    scoreDisplay.textContent = `Your time was ${speed}ms, and you had ${difference} mistakes. Your score is ${score.toFixed(2)}`;
    return speed
}





// Get the current time in milliseconds
function getTime() {
    const currentDateTime = new Date();
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentDateTime.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDateTime.getMilliseconds().toString().padStart(3, '0');
    return parseInt(`${minutes}${seconds}${milliseconds}`);
}

// Compare the user input with the given sentence and return the number of differences
function compareSentences(sentence, inputValue) {
    let sentenceLetters = sentence.split('');
    let userInputLetters = inputValue.split('');
    let difference = 0;

    for (let i = 0; i < sentenceLetters.length; i++) {
        if (sentenceLetters[i] !== userInputLetters[i]) {
            difference += 1;
        }
    }
    return difference;
}
