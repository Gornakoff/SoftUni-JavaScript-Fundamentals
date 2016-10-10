function countWords(input) {
    let count = {};
    let regex = /[^a-zA-Z0-9_]+/;
    let words = input[0].split(regex).filter(w => w != '')

    for (let word of words) {
        if (count[word] === undefined) {
            count[word] = 1;
        } else {
            count[word]++;
        }
    }

    let result = JSON.stringify(count);
    console.log(result);
}

countWords(["Far too slow, you're far too slow."])