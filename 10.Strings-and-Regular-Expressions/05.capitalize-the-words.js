function capitalize(input) {
    let words = input[0].toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('');
        words[i][0] = words[i][0].toUpperCase();
        words[i] = words[i].join('');
    }

    console.log(words.join(' '));
}

capitalize(['Capitalize these words'])