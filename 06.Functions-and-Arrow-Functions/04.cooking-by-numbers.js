function solve(input) {
    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        let action = input[i];

        if (action == 'chop') {
            num /= 2;
        } else if (action == 'dice') {
            num = Math.sqrt(num);
        } else if (action == 'spice') {
            num += 1;
        } else if (action == 'bake') {
            num *=3;
        } else if (action == 'fillet') {
            num = num - num * 0.2;
        }
        console.log(num);
    }
}

solve([32, 'chop', 'chop', 'chop', 'chop', 'chop'])
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])