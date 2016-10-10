function sequence([n, k]) {
    [n, k] = [n, k].map(Number);

    let result = [1];
    let startPos = 0;

    while (result.length < n) {
        let sum = 0;
        while (startPos < result.length) {
            sum += result[startPos];
            startPos++;
        }
        result.push(sum);

        startPos = result.length - k;
        if (startPos < 0) {
            startPos = 0;
        }
    }
    console.log(result.join(' '));
}

sequence(['6', '3'])
sequence(['8', '2'])