// find substring (case sensitive)
function findOccurences(input) {
    let match = input[0];
    let text = input[1];
    let count = 0;
    let position = -1;

    for (let i = 0; i < text.length; i++) {
        position = text.indexOf(match, position + 1);
        if (position == -1) {
            break;
        }
        count++;
    }
    console.log(count);
}

findOccurences(['the', 'The quick brown fox jumps over the lay dog.'])

//=========================================================================================
// find substring ( NON case sensitive)
function nonCaseSens(input) {
    let match = input[0].toLowerCase();
    let text = input[1].toLowerCase();
    let count = 0;
    let position = -1;

    for (let i = 0; i < text.length; i++) {
        position = text.indexOf(match, position + 1);
        if (position == -1) {
            break;
        }
        count++;
    }
    console.log(count);
}

nonCaseSens(['the', 'The quick brown fox jumps over the lay dog.'])

//=========================================================================================
// find word by splitting ( NON case sensitive)
function wordMatch(input) {
    let result = input[1].split(' ');
    let word = input[0];
    let count = 0;

    for (let i = 0; i < result.length; i++) {
        if (word == result[i]) {
            count++;
        }
    }
    console.log(count);
}

wordMatch(['the', 'The quick brown fox jumps over the lay dog.'])

//=========================================================================================
// extract number values in array
function printBill(input) {
    let items = input.filter(x => !Number(x));
    let sum = input.filter(x => Number(x)).map(Number).reduce((a, b) => a + b);

    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}

printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])

//=========================================================================================
// HIDE WORDS
function censor(input) {
    let text = input[0];
    let words = input.slice(1);

    for (let word of words) {
        let hide = '-'.repeat(word.length);
        while (text.indexOf(word) > -1) {
            text = text.replace(word, hide);
        }
    }

    console.log(text);
}
censor(['roses are red, violets are blue', ', violets are', 'red'])

//=========================================================================================
// EMAIL Validation

function validateEmail([email]) {
    let emailPattern = /^[a-zA-Z0-9._]+@[a-z]+(\.[a-z]+)+$/g;
    let result = emailPattern.test(email);

    if (result) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

validateEmail('koi.si@abasd.asd')

//=========================================================================================
// EMAIL Validation




