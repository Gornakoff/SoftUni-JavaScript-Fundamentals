function figure([n]) {
    n = Number([n]);
    let chars = 2 * n - 1;
    let dashes = (chars - 3) / 2;
    let lines = Math.floor((n - 3) / 2);
    let middle = n / 2;
    let rowsCount = n;
    let dashSymbol = '';
    let emptySpace = '';

    for (let dash = 0; dash < dashes; dash++) {
        dashSymbol += '-';
        emptySpace += ' ';
    }

    if (n % 2 == 0 && n >= 4) {
        rowsCount--;
    }

    if (n == 2) {
        console.log(`+${dashSymbol}+${dashSymbol}+`);
    } else {

        for (let row = 0; row < rowsCount; row++) {
            console.log(`+${dashSymbol}+${dashSymbol}+`);
            if (row < rowsCount - 1) {
                for (let i = 0; i < lines; i++) {
                    console.log(`|${emptySpace}|${emptySpace}|`);
                    row++;
                }
            }
        }
    }
}

figure(['2'])