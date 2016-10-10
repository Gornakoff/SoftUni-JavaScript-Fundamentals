function rotate(input) {
    let count = Number(input[input.length - 1]);
    input.pop();

    // set the optimal rotation
    count %= input.length;

    for (let i = 0; i < count; i++) {
        input.unshift(input[input.length - 1]);
        input.pop();
    }

    console.log(input.join(' '));
}

rotate([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'])