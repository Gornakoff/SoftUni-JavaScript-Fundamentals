function solve(elements) {
    elements = elements.map(Number);
    let first = [];
    let last = [];
    let count = elements[0];

    for (let i = 1; i <= count; i++) {
        first.push(elements[i]);
        last.push(elements[elements.length - count - 1 + i]);
    }

    console.log(first.join(' '));
    console.log(last.join(' '));
}

solve(['2', '7', '8', '9'])
solve(['3', '6', '7', '8', '9'])