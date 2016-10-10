function calcDegrees(grads) {
    grads = Number(grads);

    let degrees = grads * 360 / 400;
    let result = degrees % 360;

    if (result < 0) {
        result += 360;
    }

    console.log(result);
}

calcDegrees([-50])