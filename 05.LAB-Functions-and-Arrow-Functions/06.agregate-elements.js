function agregate(string) {
    let sum = 0;
    let sumInverse = 0;
    let concat = '';

    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
        sumInverse += 1/Number(string[i]);
        concat +=string[i];
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

agregate(['1', '2', '3'])
agregate(['2', '4', '8', '16'])