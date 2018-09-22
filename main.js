console.log('Hello World');

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

const userMessage = () => {
    const input = document.getElementById('userInput');
    return input.value;
};

const translate1 = (event) => {
    let test = userMessage().split(' ');
    console.log(test);
};

const swedishButton = document.getElementById('lan1');
swedishButton.addEventListener('click', translate1);




