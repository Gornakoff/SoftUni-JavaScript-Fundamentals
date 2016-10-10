function printOdd(arr) {
    arr = arr.map(Number);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            result.push(arr[i] * 2);
        }
    }
    console.log(result.reverse().join(' '));
}

printOdd(['10', '15', '20', '25'])
printOdd(['3', '0', '10', '4', '7', '3'])
printOdd(['1', '2', '5', '12', '6'])