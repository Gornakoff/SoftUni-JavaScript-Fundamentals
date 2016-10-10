function extractNumbers(input) {
    let text = '';
    let numbers = [];
    let regex = /\d+/g;

    for (let i = 0; i < input.length; i++) {
        text+= input[i];
    }

    let match = regex.exec(text);

    while (match) {
        numbers.push(match[0]);
        match = regex.exec(text);
    }

    console.log(numbers.join(' '));
}

extractNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'])


// =======================================================================
// Extract numbers from text EASIER WAY
function getNumbers(input) {
    let text = input.join(' ');
    let regex = /\d+/g;
    let numbers = text.match(regex);

    console.log(numbers.join(' '));
}

getNumbers(['123a456',
    '789b987',
    '654c321',
    '0'])
