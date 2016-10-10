function uppercaseWord([str]) {
    let symbol = '';
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != symbol);

    function extractWords() {
        return strUpper.split(/\W+/);
    }
    console.log(words.join(', '));
}

uppercaseWord(['Hi, how are you?'])
uppercaseWord(['hello'])