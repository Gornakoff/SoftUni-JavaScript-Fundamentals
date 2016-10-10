function printSpiral(input) {
    input = input[0].split(' ');
    let rows = input[0];
    let cols = input[1];
    let matrix = [];

    let row = 0, col = -1;
    let startRow = 0, startCol = 0;
    let endRow = rows - 1, endCol = cols - 1;
    let direction = 'right';
    let counter = 1;
    let maxCounter = rows * cols;

    // create matrix and fill with 0
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    // fill the spiral matrix
    while (counter < maxCounter + 1) {
        if (direction == 'right') {
            col++;
            if (col == endCol) {
                direction = 'down';
            }
        } else if (direction == 'down') {
            row++;
            if (row == endRow) {
                direction = 'left';
            }
        } else if (direction == 'left') {
            col--;
            if (col == startCol) {
                direction = 'up';
            }
        } else if (direction == 'up') {
            row--;
            if (row == startRow) {
                direction = 'right';
                row++;
                col++;
                startRow++;
                startCol++;
                endRow--;
                endCol--;
            }
        }
        matrix[row][col] = counter;
        counter++;
    }

    //print the matrix
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

printSpiral(['3 4'])