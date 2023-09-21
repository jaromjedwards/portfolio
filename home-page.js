function loadSite() {
    const fileNames = [
        'hangman.html',
        'rock-paper-scissors.html',
        'tic-tac-toe.html',
        'wordle.html'
    ];

    const fileList = document.getElementById("gamesList");

    // Loop through the fileNames array and create list items
    fileNames.forEach(fileName => {
        const listItem = document.createElement("button");
        fileList.appendChild(listItem);
        listItem.innerHTML = fileName;
    });
}

// Attach the loadSite function to the window.onload event here
window.onload = loadSite;
