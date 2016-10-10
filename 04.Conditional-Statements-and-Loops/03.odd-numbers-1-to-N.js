function oddNumbers(n) {
    let count = Number(n[0]);

    for (let i = 1; i <= count; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

oddNumbers(['11'])