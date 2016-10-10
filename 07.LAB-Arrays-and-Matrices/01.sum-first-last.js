function sum(input) {
    input = input.map(Number);
    let first = input[0];
    let last = input[input.length - 1];
    let result = first + last;

    console.log(result);
}

sum(['20', '30', '40'])