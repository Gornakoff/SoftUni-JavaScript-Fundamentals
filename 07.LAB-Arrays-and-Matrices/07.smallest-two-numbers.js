function smallestNums(arr) {
    arr = arr.map(Number);
    let res = [];
    arr.sort((a,b) => a - b);
    res.push(arr[0]);
    res.push(arr[1]);

    console.log(res.join(' '));
}

smallestNums(['30', '15', '50', '5'])
smallestNums(['3', '0', '10', '4', '7', '3'])
smallestNums(['3.1', '0', '-10.2', '-4', '7', '-10.1 '])
smallestNums(['3.1'])