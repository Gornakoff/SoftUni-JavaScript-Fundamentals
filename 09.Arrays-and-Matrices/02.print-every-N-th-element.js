function printElements(input) {
    let step = Number(input[input.length - 1]);
    input.pop();

    for (let i = 0; i < input.length; i+=step) {
        console.log(input[i]);
    }
}

printElements([
    '5',
    '20',
    '31',
    '4',
    '20',
    '2'])