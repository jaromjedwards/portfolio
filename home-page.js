const dropdownContainer = document.getElementById('dropdown-container.js')

function loadSite() {
    const dropdowns = {
        select: [
            {
                title: 'Games',
                sites: ['Hangman', 'Rock Paper Scissors', 'Tic-tac-toe', 'Wordle']
            },
            {
                title: 'Tools',
                sites: ['Calculator']
            },
            {
                title: 'DJ Website',
                sites: ['Home', 'Reviews', 'Book']
            }
        ]
    };
    emptyString = ''
    for (const dropdown of dropdowns.select) {
        if (Array.isArray(dropdown.sites)) {
            dropdown.sites.unshift(emptyString);
        }
    }

    for (const select of dropdowns.select) {
        // for each dropdown, create label and select elements
        console.log(`Select: ${select.title}`);
        console.log(select.sites);
        const labelElement = document.createElement('button');
        const selectElement = document.createElement('select');

        labelElement.textContent = (select.title);

        // append them to the div container
        dropdownContainer.appendChild(labelElement)
        dropdownContainer.appendChild(selectElement);

        for (const site of select.sites){
            const optionElement = document.createElement('option');
            optionElement.textContent = site;
            selectElement.appendChild(optionElement);            
        }

    }
}

window.onload = loadSite;
