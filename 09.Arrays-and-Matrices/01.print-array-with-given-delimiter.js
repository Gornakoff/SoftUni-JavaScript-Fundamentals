function printArray(input) {
    let delimiter = input[input.length - 1]; // get the last element of the array
    input.pop(); // remove the last element of the array
    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            result += input[i];
        } else {
            result += delimiter + input[i];
        }
    }
    console.log(result);
}
printArray(['One','Two','Three', 'Four','Five', '-'])
