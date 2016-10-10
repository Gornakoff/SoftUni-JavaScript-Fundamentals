function extractSubsequence(input) {
    input = input.map(Number);
    let start = input[0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= start) {
            start = input[i];
            console.log(start);
        }
    }
}

extractSubsequence(['10','3','8','4','10','12','3','2','24'])