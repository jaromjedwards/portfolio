function startGame(){
    userInput.value = '';
    startTime = getTime();
    sentence = getSentence();
    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            endTime = getTime();
            speed = (endTime - startTime)
            sentenceScore = compareSentences(sentence, userInput)
            // for some reason, it logs the time once more every time it is done
            updateScore(sentence, userInput, speed);
        }
    });
}

function getSentence(){
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
    let sentenceNumber = Math.floor(Math.random() * sentences.length);
    let sentence = sentences[sentenceNumber];
    let sentenceElement = document.getElementById('sentence');
    sentenceElement.textContent = sentence;
    return sentence
}

function updateScore(sentence, userInput, speed) {
    
    let inputValue = userInput.value;
    let scoreElement = document.getElementById('score');
    scoreElement.textContent = (inputValue === sentence) ? `${speed}` : 'Not a match';

}

function getTime(){
    const currentDateTime = new Date();

    // Get minutes, seconds, and milliseconds as strings with leading zeros
    let minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    let seconds = currentDateTime.getSeconds().toString().padStart(2, '0');
    let milliseconds = currentDateTime.getMilliseconds().toString().padStart(3, '0');

    timeStamp = parseInt(`${minutes}${seconds}${milliseconds}`);
    return timeStamp
}

function compareSentences(){
    
    console.log(sentence)
    console.log(userInput)
}