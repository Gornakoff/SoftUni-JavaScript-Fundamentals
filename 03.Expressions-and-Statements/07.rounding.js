function round([num, precision]) {
    num = Number(num);
    precision = Number(precision);

    let d = Math.pow(10, precision);
    let result = Math.round(num * d)/ d;
    console.log(result);
}

round(['1.05', '4'])