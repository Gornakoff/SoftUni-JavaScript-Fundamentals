function findWord(input) {
    let text = input[0];
    let word = input[1];
    let count = 0;

    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    let matches = regex.exec(text);

    while (matches) {
        count++;
        matches = regex.exec(text);
    }

    console.log(count);
}

findWord(['The waterfall was so high, that the child couldn’t see its peak.', 'the'])
findWord(['How do you plan on achieving that? How? How can you even think of that?', 'how'])
findWord(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'])