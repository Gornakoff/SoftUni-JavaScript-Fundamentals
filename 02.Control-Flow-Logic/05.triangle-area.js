function triangleArea(input) {
    let sideA = Number(input[0]);
    let sideB = Number(input[1]);
    let sideC = Number(input[2]);

    let s = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));

    console.log(area);
}

triangleArea(['2', '3.5', '4'])