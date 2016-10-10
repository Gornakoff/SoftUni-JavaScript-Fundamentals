function magic(input) {
    let matrix = input.map(inputRow => inputRow.split(' ').map(Number));
    let matrixCol = [];
    let result = true;

    for (let i = 0; i < input.length; i++) {
        //matrix.push(input[i].split(' '));
        matrixCol[i] = [];
    }

    for (let i = 0; i < matrixCol.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrixCol[j].push(matrix[i][j]);
        }
    }

    let sum = matrix[0].reduce((a,b) => Number(a) + Number(b), 0);

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce((a,b) => Number(a) + Number(b), 0);
        let colSum = matrixCol[row].reduce((a,b) => Number(a) + Number(b), 0);
        if (sum != rowSum || sum != colSum) {
            result = false;
            break;
        }
    }
    console.log(result);
}

//magic(['4 5 6', '6 5 4', '5 5 5', '0 0 0 15'])

//magic(['11 32 45', '21 0 1', '21 1 1'])

magic(['1', '2'])
