function triangle([n]) {
    let count = Number([n]);
    let symbol = '$';

    for (let i = 1; i <= count; i++) {
        console.log(symbol);
        symbol += '$';
    }
}

triangle(['5'])