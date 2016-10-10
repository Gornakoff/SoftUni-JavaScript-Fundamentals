function biggestElement(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));
    let max = matrix[0][0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > max) {
                max = matrix[row][col];
            }
        }
    }
    console.log(max);
}

biggestElement(['20 50 10', '8 33 145'])