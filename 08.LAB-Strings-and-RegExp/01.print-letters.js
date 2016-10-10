function printLetters(string) {
    let start = 0;
    for (let w of string[0]) {
        console.log(`str[${start}] -> ${w}`);
        start++;
    }
}

printLetters(['Hello, World!'])