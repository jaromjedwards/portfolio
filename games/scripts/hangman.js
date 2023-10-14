createButtons();
let chosenLetter = '';
let wordLetters = [];
let guessesLeft = 6; // You can adjust this as needed

function createButtons() {
    // Access the div in HTML and create a button for each letter of the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const buttonContainer = document.getElementById('button-container');

    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => handleButtonClick(letter));
        buttonContainer.appendChild(button);
    }
}

function startNewGame() {
    wordLetters = hangman();
    displayWord(wordLetters);
    guessesLeft = 6; // Reset the number of guesses
    document.getElementById('guess-count').textContent = guessesLeft;
}

function handleButtonClick(letter) {
    if (guessesLeft > 0) {
        chosenLetter = letter;
        const correctGuess = checkForLetter(chosenLetter, wordLetters);

        if (!correctGuess) {
            // Decrement the guesses left if the guess was incorrect
            guessesLeft--;
            document.getElementById('guess-count').textContent = guessesLeft;
        }

        // Update game state and check for a win/loss here
        // You should update the displayed word, keep track of incorrect guesses, and check if the player has won or lost.
    }
}

function hangman() {
    const words = ['hello', 'jarom', 'kayla', 'hunger', 'games', 'peeta'];
    const word = words[Math.floor(Math.random() * words.length)];
    const letters = word.split('');
    return letters;
}

function checkForLetter(letter, letters) {
    const letterLower = letter.toLowerCase();
    const correctGuess = letters.includes(letterLower);

    if (correctGuess) {
        // You can update the displayed word here
        // For example, replace underscores with the correct letter.
    }

    return correctGuess;
}

function displayWord(letters) {
    const wordDisplay = document.getElementById('word-display');
    const wordHtml = letters.map(letter => {
        return '<span>' + (letter === ' ' ? ' ' : '_') + '</span>';
    }).join('');
    wordDisplay.innerHTML = wordHtml;
}