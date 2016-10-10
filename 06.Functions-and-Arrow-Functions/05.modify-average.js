function modify(number) {
    let str = number.toString();
    let digits = str.split('').map(Number);
    let sum = digits.reduce((a, b) => a + b);

    while (sum / str.length <= 5) {
        str += 9;
        sum += 9;
    }
    console.log(str);
}

modify([101])
modify([5385])