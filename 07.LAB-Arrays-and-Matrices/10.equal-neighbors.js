function equalNeighbors(matrix) {
    matrix = matrix.map(row => row.split(' '));
    let count = 0;
    let start = matrix.length - 1;


    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                count++;
            }
            if (matrix[row][col] == matrix[row][col+ 1]) {
                count++;
            }
        }
    }

    for (let i = 0; i < matrix[start].length; i++) {
        if (matrix[start][i] == matrix[start][i+1]) {
            count++;
        }
    }
    console.log(count);
}

equalNeighbors(['2 3 4 7 0', '4 0 5 3 4', '2 3 5 4 2', '9 8 7 5 4'])

equalNeighbors(['test yes yo ho', 'well done yo 6', 'not done yet 5'])

equalNeighbors(['2 2 5 7 4',
    '4 0 5 3 4',
    '2 5 5 4 2'])