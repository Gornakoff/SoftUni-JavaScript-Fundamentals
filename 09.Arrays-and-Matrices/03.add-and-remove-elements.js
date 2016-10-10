function elementsManipulation(input) {
    let num = 1;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            result.push(num);
        } else if (input[i] == 'remove') {
            result.pop();
        }
        num++;
    }
    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

//elementsManipulation(['add', 'add', 'add', 'add'])
elementsManipulation(['add', 'add', 'remove', 'add', 'add'])
elementsManipulation(['remove', 'remove', 'remove'])