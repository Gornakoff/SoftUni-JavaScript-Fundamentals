function calculate(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let s = a * b;
    let p = 2 * a + 2 * b;

    console.log(s);
    console.log(p);
}

calculate(['1', '3'])