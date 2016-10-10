function checkStart(input) {
    let str = input[0];
    let substring = input[1];
    let check = false;

    let strSelect = str.substr(0, substring.length);

    if (substring == strSelect) {
        check = true;
    }

    console.log(check);
}

checkStart(['The quick brown fox…', 'The quick brown fox…'])
checkStart(['Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'])
checkStart(['How have you been?','how'])