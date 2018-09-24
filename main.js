const en = {
    "merry":"merry", 
    "christmas":"christmas", 
    "and":"and", 
    "happy":"happy", 
    "new":"new", 
    "year":"year"
}

const swedish = {
    "merry":"god", 
    "christmas":"jul", 
    "and":"och", 
    "happy":"gott", 
    "new":"nytt", 
    "year":"år"
}

const french = {
    "merry":"joyeux", 
    "christmas":"Noël", 
    "and":"et", 
    "happy":"content", 
    "new":"Nouveau", 
    "year":"an"
}

const spanish = {
    "merry":"alegre", 
    "christmas":"Navidad", 
    "and":"y", 
    "happy":"contento", 
    "new":"nuevo", 
    "year":"año"
}

let englishChecker = Object.keys(en);

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const userMessage = () => {
    let inputDiv = document.getElementById('userInput');
    let inputVal = inputDiv.value;
    let inputLC = inputVal.toLowerCase();
    let inputArray = inputLC.split(' ');
    return inputArray;
};

const translate1 = () => {
    let swedStringBuilder = '';
    const userArray = userMessage();
    for (let i = 0; i < userArray.length; i++) {
        let userChecker = userArray[i];      
        console.log(swedish[userChecker]);
        swedStringBuilder += `${swedish[userChecker]} `;
}
printToDom(swedStringBuilder, 'userOutput');
};

const swedishButton = document.getElementById('swedButton');
swedishButton.addEventListener('click', translate1);




