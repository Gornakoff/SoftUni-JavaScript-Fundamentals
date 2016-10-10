function path(input) {
    input = input.map(Number);
    let x1 = input[0], x2 = input[2], x3 = input[4];
    let y1 = input[1], y2 = input[3], y3 = input[5]

    let dist12 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let dist23 = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
    let dist31 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));

    let shortestWay = 0;

    let first = 1;
    let second = 2;
    let third = 3;

    if (dist12 <= dist31 && dist23 <= dist31) {
        shortestWay = dist12 + dist23;
    } else if (dist12 <= dist23 && dist23 > dist31 ) {
        shortestWay = dist12 + dist31;
        first = 2;
        second = 1;
        third = 3;
    } else {
        shortestWay = dist23 + dist31;
        second = 3;
        third = 2;
    }

    console.log(`${first}->${second}->${third}: ${shortestWay}`);
}

path(['0', '0', '2', '0', '4', '0'])
path(['5', '1', '1', '1', '5', '4'])
path(['-1', '-2', '3.5', '0', '0', '2'])