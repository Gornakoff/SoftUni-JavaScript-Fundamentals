function orbit(input) {
    let data = input.map(row => row.split(' ').map(Number));
    let starRow = data[1][0];
    let starCol = data[1][1];
    let rows = data[0][0];
    let cols = data[0][1];
    let field = [];
    let maxNumber = Math.max(starCol, cols - starCol, starRow, rows - starRow);
    if (starRow == 0 && starCol == 0) {
        maxNumber++;
    }

    for (let i = 0; i < rows; i++) {
        field[i] = [];
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (row == starRow && col == starCol) {

            }
        }
    }

    console.log(data);
    console.log(maxNumber);
}

orbit(['4 4',
'0 0'])

orbit(['5 5',
    '2 2'])

orbit(['3 3',
    '2 2'])