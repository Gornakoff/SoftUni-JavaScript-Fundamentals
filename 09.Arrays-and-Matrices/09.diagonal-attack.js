function diagonalSum(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumLeft += matrix[i][i];
        sumRight += matrix[i][matrix[i].length - i - 1];
    }
    if (sumLeft === sumRight) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && matrix.length - row - 1 != col) {
                    matrix[row][col] = sumLeft;
                }
            }
            console.log(matrix[row].join(' '));
        }
    }
}

diagonalSum(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])