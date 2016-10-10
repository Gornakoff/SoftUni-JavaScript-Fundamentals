function checkPoints([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    let result = '';

    let r1 = [x1, y1, 0, 0];
    let r2 = [x2, y2, 0, 0];
    let r3 = [x1, y1, x2, y2];

    function calcDistance(p) {
        let px1 = p[0], py1 = p[1], px2 = p[2], py2 = p[3];
        let pX = px1 - px2;
        let pY = py1 - py2;
        let action = 'invalid';

        let sqDistance = pX * pX + pY * pY;
        let distance = Math.sqrt(sqDistance);

        if(Number.isInteger(distance)) {
            action = 'valid';
        }
        result = `{${px1}, ${py1}} to {${px2}, ${py2}} is ${action}`;
        return result;
    }

    console.log(calcDistance(r1));
    console.log(calcDistance(r2));
    console.log(calcDistance(r3));
}

checkPoints(['3','0','0','4'])
checkPoints(['2','1','1','1'])