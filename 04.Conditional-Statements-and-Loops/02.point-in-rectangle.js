function pointPosition([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number);

    let position = 'outside';

    if (x >= xMin && x <=xMax && y >= yMin && y <= yMax) {
        position = 'inside';
    }

    console.log(position);
}

pointPosition(['8', '-1', '2', '12', '-3', '3'])
pointPosition(['12.5', '-1', '2', '12', '-3', '3'])