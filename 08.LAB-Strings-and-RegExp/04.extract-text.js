function extractText(input) {
    let text = input[0];
    let result = [];
    let start = text.indexOf('(');

    while (start > -1) {
        let end = text.indexOf(')', start);
        if (end == - 1) {
            break;
        }
        let extract = text.substring(start + 1, end);
        result.push(extract);

        start = text.indexOf('(', end);
        if (start == -1) {
            break;
        }
    }

    console.log(result.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'])
