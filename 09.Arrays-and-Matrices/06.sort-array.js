function sort(input) {
    input = input.sort();
    input.sort((a, b) => a.length > b.length);

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}

//sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
//sort(['beta', 'alpha', 'gamma'])
sort(['Deny', 'omen', 'test', 'Default'])