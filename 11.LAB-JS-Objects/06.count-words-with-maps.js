function countWordsMaps(text) {
    let count = {};
    let regex = /[^a-zA-Z0-9_]+/;
    let words = text[0]
        .toLowerCase()
        .split(regex)
        .filter(w => w != '')
        .sort();

    for (let word of words) {
        if (count[word] === undefined) {
            count[word] = 1;
        } else {
            count[word]++;
        }
    }

    for (let key of Object.keys(count)) {
        let result = `'${key}' -> ${count[key]} times`;
        console.log(result);
    }
}

//countWordsMaps(["Far too slow, you're far too slow."])
countWordsMaps(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --'])