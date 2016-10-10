function calculateDistance([x1, y1, x2, y2]) {
    let pointX = Math.abs(Number(x1) - Number(x2));
    let pointY = Math.abs(Number(y1) - Number(y2));
    let distance = Math.sqrt(pointX * pointX + pointY * pointY);

    console.log(distance);
}

calculateDistance(['2', '4', '5', '0'])
calculateDistance(['2.34', '15.66', '-13.55', '-2.9985'])