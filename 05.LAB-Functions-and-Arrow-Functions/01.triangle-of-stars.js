function triangle([size]) {
    size = Number([size]);

    for (let i = 1; i <= size; i++) {
        console.log('*'.repeat(i));
    }
    for (let j = size - 1; j >= 1; j--) {
        console.log('*'.repeat(j));
    }
}

triangle(['5'])