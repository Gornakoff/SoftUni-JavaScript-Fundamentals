function endsWith(input) {
    let str = input[0];
    let substring = input[1];
    let strEnd = str.substr(str.length - substring.length, str.length);
    let result = false;

    if (substring == strEnd) {
        result = true;
    }

    console.log(result);
}

endsWith(['This sentence ends with fun?', 'fun?'])