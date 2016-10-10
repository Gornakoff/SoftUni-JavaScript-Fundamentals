function calcCompound([p, i, n, t]) {
    p = Number(p);
    i = Number(i) / 100;
    n = Number(n);
    t = Number(t);

    let frequency = 12 / n;
    let f = p * Math.pow(1 + i / frequency, frequency * t);

    console.log(f.toFixed(2));
}

calcCompound([1500, 4.3, 3, 6])
calcCompound([100000, 5, 12, 25])