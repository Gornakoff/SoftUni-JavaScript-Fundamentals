function printArray(input) {
    let delimiter = input[input.length - 1]; // get the last element of the array
    input.pop(); // remove the last element of the array
    let str = input[0].split(delimiter);

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
printArray(['One-Two-Three-Four-Five', '-'])
//printArray(['http://platform.softuni.bg', '.'])