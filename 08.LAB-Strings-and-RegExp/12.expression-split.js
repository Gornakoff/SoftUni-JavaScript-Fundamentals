function expSplit(input) {
    let expression = input[0];
    let elements = expression.split(/[\s.();,]+/).filter(x => x != '');

    console.log(elements.join('\n'));
}

expSplit(['let sum = 4 * 4,b = "wow";'])