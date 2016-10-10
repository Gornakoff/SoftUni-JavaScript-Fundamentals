function findNames(input) {
    let text = input[0];
    let regex = /\b_[A-Za-z0-9]+\b/g; // define the pattern
    let matches = text.match(regex); // extract all matches
    let result = [];

    for (let item of matches) {
        result.push(item.slice(1)); // get the word without '_' before it (ignore first symbol)
    }

    console.log(result.join(','));
}

findNames(['The _id and _age variables are both integers.'])
findNames(['Calculate the _area of the _perfectRectangle object.'])
findNames(['__invalidVariable _evenMoreInvalidVariable_ _validVariable'])